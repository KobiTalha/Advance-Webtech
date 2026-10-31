import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';

type EnrollmentInput = { studentName?: string; courseId?: string };

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  getEnrollments() {
    return this.enrollmentService.getEnrollments();
  }

  @Post()
  enrollStudent(@Body() body?: EnrollmentInput) {
    return this.enrollmentService.enrollStudent(
      body?.studentName ?? '',
      body?.courseId ?? '',
    );
  }
}
