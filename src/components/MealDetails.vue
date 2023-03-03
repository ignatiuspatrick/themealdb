<template>
  <div>
    <h1>{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <h2>Ingredients:</h2>
    <IngredientList :ingredients="ingredients" />
    <h2>Instructions:</h2>
    <div class="instructions">
      <h3>Instructions:</h3>
      <ul style="list-style-type: none">
        <li
          v-for="(instruction, index) in meal.strInstructions.split('.')"
          :key="index"
        >
          {{ instruction }}
        </li>
      </ul>
    </div>

    <button @click="$router.push('/')">Return to Home</button>
  </div>
</template>

<script>
import IngredientList from "@/components/IngredientList.vue";

export default {
  name: "MealDetails",
  components: {
    IngredientList,
  },
  props: {
    meal: Object,
  },
  computed: {
    ingredients() {
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredientName = this.meal[`strIngredient${i}`];
        const ingredientMeasure = this.meal[`strMeasure${i}`];
        if (ingredientName) {
          ingredients.push({
            name: ingredientName,
            measure: ingredientMeasure,
          });
        } else {
          break;
        }
      }
      return ingredients;
    },
  },
};
</script>
