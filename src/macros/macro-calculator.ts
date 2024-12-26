//Calculate mainly based on Jeff Nippards Article: https://jeffnippard.com/blogs/news/how-to-build-muscle-and-lose-fat-at-the-same-time-step-by-step-explained-body-recomposition
//Protein and fat stays consistent and based on dietary goal the carbs get adjusted.

export class MacroCalculator {
    public calculateMacros(calories: number, bodyWeight: number) {
        // Protein: Body weight (kg) * 2.2 (grams of protein per kg of body weight)
        const proteinGrams = bodyWeight * 2.2;
        const proteinCalories = proteinGrams * 4;

        // Fat: 30% of total calories
        const fatCalories = calories * 0.3;
        const fatGrams = fatCalories / 9;

        // Carbs: Remaining calories after protein and fat
        const carbCalories = calories - proteinCalories - fatCalories;
        const carbGrams = carbCalories / 4;

        return {
            protein: proteinGrams,
            fat: fatGrams,
            carbs: carbGrams,
            proteinCalories: proteinCalories,
            fatCalories: fatCalories,
            carbCalories: carbCalories
        };
    }
}
