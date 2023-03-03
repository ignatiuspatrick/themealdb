import Vue from "vue/dist/vue.js"
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: '',
    meals: [],
  },
  mutations: {
    setQuery(state, query) {
      state.query = query;
    },
    setMeals(state, meals) {
      state.meals = meals;
    },
  },
  actions: {
    search({ commit }, query) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => {
          commit('setQuery', query);
          commit('setMeals', response.data.meals);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
});
