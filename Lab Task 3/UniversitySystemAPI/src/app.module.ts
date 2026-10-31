import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [CourseModule, EnrollmentModule],
})
export class AppModule {}
