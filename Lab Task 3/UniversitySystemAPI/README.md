# UniversitySystemAPI — Lab Task 03

A standalone NestJS API demonstrating provider injection within a module, between modules, and across a circular module relationship. Responses use in-memory demonstration objects; no database is required.

Tested with Node.js v24.21.0 and npm.

## Setup

```bash
npm install
npm run start:dev
```

The API listens at `http://localhost:3000`.

## Build and tests

```bash
npm run build
npm test -- --runInBand
```

The end-to-end suite starts the Nest application and exercises all listed routes, including the circular service references.

## Routes

| Method | Route | Example body |
|---|---|---|
| GET | `/course` | — |
| GET | `/course/:id` | — |
| POST | `/course` | `{"name":"NestJS","code":"CS301"}` |
| GET | `/enrollment` | — |
| POST | `/enrollment` | `{"studentName":"John Doe","courseId":"101"}` |
| POST | `/notification/send` | `{"studentName":"John Doe","message":"Welcome!"}` |
| POST | `/notification/check` | `{"studentName":"John Doe","courseId":"101"}` |

## Dependency injection

`CourseModule` provides and exports `CourseService`. `CourseController` injects it directly, while `EnrollmentModule` imports `CourseModule` and injects the same provider into `EnrollmentService`.

`EnrollmentService` and `NotificationService` inject one another with constructor-level `forwardRef()`. Their modules also use `forwardRef()` for reciprocal imports. Enrollment looks up the course and includes a notification confirmation in its response; notification checks call the enrollment service.
