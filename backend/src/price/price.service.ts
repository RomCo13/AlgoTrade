import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService {
  async getPrice(symbol: string): Promise<number> {
    // In real life, fetch from an exchange API
    // Here we return a random price for demonstration
    return Promise.resolve(30000 + Math.random() * 40000);
  }
}
