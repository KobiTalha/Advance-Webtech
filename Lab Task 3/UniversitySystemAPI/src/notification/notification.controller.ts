import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

type SendNotificationInput = { studentName?: string; message?: string };
type EnrollmentCheckInput = { studentName?: string; courseId?: string };

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  sendNotification(@Body() body?: SendNotificationInput) {
    return this.notificationService.sendNotification(
      body?.studentName ?? '',
      body?.message ?? '',
    );
  }

  @Post('check')
  checkEnrollmentAndNotify(@Body() body?: EnrollmentCheckInput) {
    return this.notificationService.checkEnrollmentAndNotify(
      body?.studentName ?? '',
      body?.courseId ?? '',
    );
  }
}
