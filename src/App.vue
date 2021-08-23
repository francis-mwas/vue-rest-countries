<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark style-nav">
      <router-link to="/" class="navbar-brand">Countries App</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/contries" class="nav-link">Countries</router-link>
        </li>
      </div>
    </nav>
    <div>
      <c-list />
    </div>
    <div>
      <app-footer />
    </div>
  </div>
</template>

<script>
import CountriesList from "./components/CountriesList.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    "c-list": CountriesList,
    "app-footer": Footer
  },
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
.style-nav {
  background-color: style-nav !important;
}
</style>
