# Architectural Decisions

> This code is a Vue.js application that retrieves meal information from TheMealDB API and displays it on the page. It consists of four components: TheMeal, Navbar, MealDetails, and IngredientList.
> TheMeal.vue is the main component that displays a search bar and a list of meals. It uses axios to make an API request to TheMealDB API and displays the meals as cards. Clicking on a meal card leads to the MealDetails component.
> Navbar.vue is a simple component that displays a navigation bar at the top of the page. It contains a link to the home page.
> MealDetails.vue displays the details of a particular meal, including its name, image, ingredients, and instructions. It uses the IngredientList component to display the ingredients.
> IngredientList.vue is a component that displays a list of ingredients for a meal.
> The code uses Vue.js single-file components, which contain the template, script, and style sections in a single file. The template section contains the HTML markup, the script section contains the JavaScript code, and the style section contains the CSS code.

# Folder Structure

The project follows a modular folder structure where each module is self-contained and has its own set of components, views, and state management. This makes it easy to manage and maintain the codebase. The main folders are:

- assets: This folder contains all the static assets like images, fonts, and stylesheets.
- components: This folder contains all the reusable components used throughout the application.
- router: This folder contains the Vue Router configuration.
- store: This folder contains the Vuex store for managing the application state.
- views: This folder contains all the page-level components.

# Included Library

The project uses the following libraries and frameworks:

- Vue.js: A progressive JavaScript framework for building user interfaces.
- Vuex: A state management library for Vue.js applications.
- Vue Router: A routing library for Vue.js applications.
- Axios: A promise-based HTTP client for making API requests.
- vue-fontawesome: A Vue.js component for FontAwesome icons.

# Handling of application state:

The project uses Vuex for managing the application state. The state is divided into modules, with each module containing its own state, mutations, actions, and getters. This makes it easy to manage and maintain the state of the application as it grows. The state is also separated by feature to maintain a clear separation of concerns.
Overall, the architectural decisions taken in this project help to maintain a clean and organized codebase, making it easy to manage and maintain the application as it grows.

# How to Start the Application

Open your code editor and navigate to the project directory.
Make sure you have Node.js and NPM (Node Package Manager) installed on your computer.
Open the terminal or command prompt and run the following command to install the required dependencies:

npm install

Once the installation is complete, run the following command to start the application:

npm run dev

The terminal should display the URL where the application is running. Open a web browser and navigate to that URL to view the application.
Note: This assumes that you have the Vue.js CLI (Command Line Interface) installed globally on your computer. If you don't have it installed, you can install it by running the following command:

npm install -g @vue/cli

## Unit Test

The test suite includes four test cases:

displays warning label when search query is empty: This test ensures that the warning label is displayed when the search query is empty.

dispatches pushSearchResult action when search query is not empty: This test ensures that the pushSearchResult Vuex action is dispatched when the search query is not empty.

displays no result message when API returns null result: This test ensures that the "no result" message is displayed when the API returns a null result.

renders meal cards when API returns valid result: This test ensures that the meal cards are rendered when the API returns a valid result.
