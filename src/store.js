import Vue from "vue/dist/vue.js";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mealsList: [],
  },
  getters: {
    getMealsList(state) {
      return state.mealsList;
    },
  },
  mutations: {
    UPDATE_MEALS_LIST(state, mealsListItems) {
      state.mealsList.splice(0, state.mealsList.length);
      mealsListItems.forEach((meal) => state.mealsList.push(meal));
    },
  },
  actions: {
    pushSearchResult({ commit }, mealsListItems) {
      commit("UPDATE_MEALS_LIST", mealsListItems);
    },
  },
});
