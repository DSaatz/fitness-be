import { Injectable } from '@nestjs/common';
import { MacroCalculator } from './macro-calculator';

@Injectable()
export class MacrosService {
    private readonly macroCalculator: MacroCalculator;

    constructor(){
        this.macroCalculator = new MacroCalculator();
    }

    calculateDailyMacros(
        calories: number,
        weight: number
    ){
    const macros = this.macroCalculator.calculateMacros(calories, weight);
    return macros;
    }
}
