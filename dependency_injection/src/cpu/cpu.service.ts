import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

//DI injectable
@Injectable()
export class CpuService {
  constructor(public powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from PowerService');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
