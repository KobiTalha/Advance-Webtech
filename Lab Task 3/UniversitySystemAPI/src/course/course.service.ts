import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): { message: string; data: never[] } {
    return { message: 'All courses fetched', data: [] };
  }

  getCourseById(id: string): { message: string; id: string } {
    return { message: 'Course fetched', id };
  }

  createCourse(name: string, code: string): {
    message: string;
    data: { name: string; code: string };
  } {
    return { message: 'Course created', data: { name, code } };
  }
}
