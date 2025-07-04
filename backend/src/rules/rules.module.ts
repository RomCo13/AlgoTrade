import { Module } from '@nestjs/common';
import { RulesController } from './rules.controller';
import { RulesService } from './rules.service';
import { PriceService } from '../price/price.service';
import { NotificationService } from '../notification/notification.service';

@Module({
  controllers: [RulesController],
  providers: [RulesService, PriceService, NotificationService],
})
export class RulesModule {}
