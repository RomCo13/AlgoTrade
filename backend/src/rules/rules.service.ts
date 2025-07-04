import { Injectable } from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { PriceService } from '../price/price.service';
import { NotificationService } from '../notification/notification.service';

interface Rule extends CreateRuleDto {}

@Injectable()
export class RulesService {
  private rules: Rule[] = [];

  constructor(
    private priceService: PriceService,
    private notificationService: NotificationService,
  ) {
    setInterval(() => this.checkRules(), 5000);
  }

  addRule(rule: CreateRuleDto) {
    this.rules.push(rule);
  }

  getRules() {
    return this.rules;
  }

  private async checkRules() {
    for (const rule of this.rules) {
      const price = await this.priceService.getPrice(rule.symbol);
      if (rule.operator === '>' && price > rule.value) {
        await this.notificationService.sendNotification(
          `Rule met: ${rule.symbol} ${rule.operator} ${rule.value} (current ${price})`,
        );
      }
      if (rule.operator === '<' && price < rule.value) {
        await this.notificationService.sendNotification(
          `Rule met: ${rule.symbol} ${rule.operator} ${rule.value} (current ${price})`,
        );
      }
    }
  }
}
