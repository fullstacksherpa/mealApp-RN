import { MEALS } from "./data/dummy-data";

const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >=0;
  
})