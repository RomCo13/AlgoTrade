import { Controller, Get, Post, Body } from '@nestjs/common';
import { RulesService } from './rules.service';
import { CreateRuleDto } from './dto/create-rule.dto';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Get()
  findAll() {
    return this.rulesService.getRules();
  }

  @Post()
  create(@Body() dto: CreateRuleDto) {
    this.rulesService.addRule(dto);
    return { status: 'ok' };
  }
}
