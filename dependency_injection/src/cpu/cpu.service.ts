import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

//DI injectable
@Injectable()
export class CpuService {
  constructor(public powerService: PowerService) {}
}
