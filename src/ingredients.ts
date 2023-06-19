export interface Ingredient {
    icon: string;
    label: string;
  }
  
  export const allIngredients = [
    { icon: "💻", label: "Programming"},
    { icon: "🎨", label: "Game Development" },
    { icon: "🗣️", label: "Language" }
  ];
  
  const [programming, modeling, language] = allIngredients;
  export const initialTabs = [programming, modeling, language];
  
  export function getNextIngredient(
    ingredients: Ingredient[]
  ): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
  }
  