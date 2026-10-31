import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('UniversitySystemAPI dependency injection (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('serves course retrieval and creation routes', async () => {
    await request(app.getHttpServer())
      .get('/course')
      .expect(200)
      .expect({ message: 'All courses fetched', data: [] });

    await request(app.getHttpServer())
      .get('/course/101')
      .expect(200)
      .expect({ message: 'Course fetched', id: '101' });

    await request(app.getHttpServer())
      .post('/course')
      .send({ name: 'NestJS', code: 'CS301' })
      .expect(201)
      .expect({
        message: 'Course created',
        data: { name: 'NestJS', code: 'CS301' },
      });
  });

  it('injects CourseService into enrollment and confirms its notification', async () => {
    await request(app.getHttpServer())
      .get('/enrollment')
      .expect(200)
      .expect({ message: 'All enrollments fetched', data: [] });

    const response = await request(app.getHttpServer())
      .post('/enrollment')
      .send({ studentName: 'John Doe', courseId: '101' })
      .expect(201);

    expect(response.body).toEqual({
      message: 'Student enrolled successfully',
      student: 'John Doe',
      course: { message: 'Course fetched', id: '101' },
      notification: {
        message: 'Notification sent successfully',
        student: 'John Doe',
        notification: 'Your enrollment was successful.',
      },
    });
  });

  it('serves notification routes through the circular provider references', async () => {
    await request(app.getHttpServer())
      .post('/notification/send')
      .send({ studentName: 'John Doe', message: 'Welcome!' })
      .expect(201)
      .expect({
        message: 'Notification sent successfully',
        student: 'John Doe',
        notification: 'Welcome!',
      });

    const response = await request(app.getHttpServer())
      .post('/notification/check')
      .send({ studentName: 'John Doe', courseId: '101' })
      .expect(201);

    expect(response.body).toEqual({
      message: 'Enrollment check completed',
      student: 'John Doe',
      courseId: '101',
      enrollments: { message: 'All enrollments fetched', data: [] },
    });
  });
});
