import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

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

  updateCourse(id: string, dto: UpdateCourseDto) {
    return { message: 'Course updated successfully', id, data: dto };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
    return {
      message: 'Course patched successfully',
      id,
      updatedFields: Object.keys(dto),
    };
  }

  deleteCourse(id: string): { message: string; id: string } {
    return { message: 'Course deleted successfully', id };
  }
}
