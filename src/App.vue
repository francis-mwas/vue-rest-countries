<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark style-nav">
      <router-link to="/" exact class="navbar-brand">Countries App</router-link>
      <div class="navbar-nav mr-auto"></div>
    </nav>
    <div>
      <router-view v-bind:countries="countries" />
    </div>
    <!-- <div>
      <c-list v-bind:countries="countries" />
    </div> -->
    <div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppService from "./services/AppService";
import CountriesList from "./components/CountriesList.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "c-list": CountriesList,
    "app-footer": Footer
  },
  name: "app",
  data() {
    return {
      countries: []
    };
  },
  methods: {
    getCountries() {
      AppService.getAll()
        .then(response => {
          this.countries = response.data;
          console.log("The countries: ", this.countries);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getCountries();
  }
};
</script>

<style>
.style-nav {
  background-color: style-nav !important;
}
</style>
