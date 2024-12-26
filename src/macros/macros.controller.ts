import { Controller, Post, Body } from '@nestjs/common';
import { MacrosService } from './macros.service';

class CalculateMacrosDto{
    calories: number;
    weight: number;
}

@Controller('macros')
export class MacrosController {
    constructor (private readonly macrosService: MacrosService){
        }
    @Post('calculate')
    calculateMacros(@Body() dto: CalculateMacrosDto){
        return this.macrosService.calculateDailyMacros(
            dto.calories,
            dto.weight
        );
    }
}
