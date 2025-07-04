export class CreateRuleDto {
  symbol: string; // e.g., BTC
  operator: '>' | '<';
  value: number; // e.g., 70000
}
