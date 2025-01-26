import { Controller, Get, Query } from '@nestjs/common';
import { NutritionInfoService } from './nutrition-info.service';

@Controller('nutrition-info')
export class NutritionInfoController {
    constructor(private readonly nutritonInfoService: NutritionInfoService) {}

    @Get('search')
    async searchProduct(@Query('searchTerm') searchTerm: string) {
        if(!searchTerm) {
            throw new Error('Search term is required');
        }
        return this.nutritonInfoService.searchProducts(searchTerm);
    }
}
