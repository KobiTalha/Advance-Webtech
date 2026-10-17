import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses(): { message: string; data: never[] } {
    return { message: 'All courses fetched successfully', data: [] };
  }
}
