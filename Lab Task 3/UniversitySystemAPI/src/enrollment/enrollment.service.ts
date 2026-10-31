import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CourseService } from '../course/course.service';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class EnrollmentService {
  constructor(
    private readonly courseService: CourseService,
    @Inject(forwardRef(() => NotificationService))
    private readonly notificationService: NotificationService,
  ) {}

  enrollStudent(studentName: string, courseId: string) {
    const courseData = this.courseService.getCourseById(courseId);
    return {
      message: 'Student enrolled successfully',
      student: studentName,
      course: courseData,
    };
  }

  getEnrollments(): { message: string; data: never[] } {
    return { message: 'All enrollments fetched', data: [] };
  }
}
