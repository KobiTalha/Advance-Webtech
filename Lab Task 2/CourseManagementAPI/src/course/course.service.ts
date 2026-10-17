import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  getAllCourses(): { message: string; data: never[] } {
    return { message: 'All courses fetched successfully', data: [] };
  }

  getCourseById(id: string): { message: string; id: string } {
    return { message: 'Course fetched successfully', id };
  }

  createCourse(dto: CreateCourseDto): {
    message: string;
    data: CreateCourseDto;
  } {
    return { message: 'Course created successfully', data: dto };
  }
}
