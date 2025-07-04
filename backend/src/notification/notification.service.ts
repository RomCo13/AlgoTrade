import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendNotification(message: string): Promise<void> {
    // Placeholder for push notification logic
    console.log('Push notification:', message);
  }
}
