import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): { message: string; data: never[] } {
    return { message: 'All courses fetched successfully', data: [] };
  }

  getCourseById(id: string): { message: string; id: string } {
    return { message: 'Course fetched successfully', id };
  }
}
