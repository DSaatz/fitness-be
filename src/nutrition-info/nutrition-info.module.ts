import { Module } from "@nestjs/common";
import { NutritionInfoService } from "./nutrition-info.service";
import { NutritionInfoController } from "./nutrition-info.controller";

@Module({
    providers: [NutritionInfoService],
    controllers: [NutritionInfoController]
})
export class NutritionInfoModule {}