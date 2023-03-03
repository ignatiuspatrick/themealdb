import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import TheMeal from "@/components/TheMeal";
import MealDetails from "../components/MealDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheMeal",
    component: TheMeal,
  },
  {
    path: "/meal-details",
    name: "MealDetails",
    component: MealDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
