<template>
  <ul>
    <li v-for="(ingredient, index) in ingredients" :key="index">
      {{ ingredient.name }} - {{ ingredient.measure }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "IngredientList",
  props: {
    ingredients: {
      type: Array,
      required: true,
      validator: (arr) => {
        return arr.every(
          (ingredient) => "name" in ingredient && "measure" in ingredient
        );
      },
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
