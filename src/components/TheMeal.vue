<template>
  <div>
    <NavBar />
    <img src="../assets/logo.png" class="logo" />
    <h1>by. Ignatius Patrick</h1>
    <input type="text" v-model="query" @keyup.enter="search" />
    <button class="search-button" @click="search">Search</button>
    <p v-if="showWarning" class="warning-label">Enter a search input!</p>
    <hr />
    <div class="meal-cards">
      <div class="no-result-label">
        <label v-if="noResultMessage">
          {{ noResultMessage }}
        </label>
      </div>
      <div
        v-for="meal in $store.getters.getMealsList"
        :key="meal.idMeal"
        class="meal-card"
      >
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal-image" />
        <div class="meal-details">
          <h2 class="meal-name">
            {{ meal.strMeal }} // {{ meal.strCategory }} // {{ meal.strArea }}
          </h2>
          <p class="meal-instructions">{{ meal.strInstructions }}</p>
          <router-link :to="{ name: 'MealDetails', params: { meal: meal } }">
            <button>View Details</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "TheMeal",
  components: {
    NavBar,
  },
  data() {
    return {
      query: "",
      showWarning: false,
      noResultMessage: "",
    };
  },
  methods: {
    search() {
      if (this.query == "") {
        this.showWarning = true;
      } else {
        axios
          .get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.query}`
          )
          .then((response) => {
            if (response.data.meals == null) {
              this.noResultMessage = "No result found, try different input.";
            } else {
              this.$store.dispatch("pushSearchResult", response.data.meals);
              this.noResultMessage = "";
            }
          })
          .catch((error) => {
            console.error(error);
          });
        this.showWarning = false;
      }
    },
  },
};
</script>
<style>
.warning-label {
  background-color: yellow;
  padding: 10px;
  font-weight: bold;
}

.no-result-label {
  align-items: center;
  background-color: red;
  color: white;
  position: relative;
  font-weight: bold;
}

.logo {
  width: 500px;
  height: 500px;
  object-fit: cover;
  /* margin-right: 10px; */
}

.meal-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.meal-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  width: calc(33.33% - 10px);
}

.meal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.meal-details {
  padding: 20px;
}

.meal-name {
  font-size: 20px;
  margin-bottom: 10px;
}

.meal-instructions {
  font-size: 16px;
  line-height: 1.4;
  max-height: 120px;
  overflow-y: auto;
}

.search-button {
  margin-left: 10px;
}

.reset-button {
  margin-left: 10px;
}
</style>
