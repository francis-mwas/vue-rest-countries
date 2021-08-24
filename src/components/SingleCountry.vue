<template>
  <section class="countries">
    <div class="section-title">
      <h4>Learn more about {{ country.name }}</h4>
      <div class="under-line"></div>
    </div>
    <div class="countries-container">
      <div class="card" style="width: 18rem;">
        <img
          class="card-img-top"
          v-bind:src="country.flag"
          alt="Country Flag"
        />
        <div class="card-body">
          <h5 class="card-title">{{ country.name }}</h5>
          <p class="card-text">Country total area: {{ country.area }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Capital city: {{ country.capital }}</li>
          <li class="list-group-item">Native name: {{ country.nativeName }}</li>
          <li class="list-group-item">Region: {{ country.region }}</li>
          <li class="list-group-item">Sub Region: {{ country.subregion }}</li>
          <li class="list-group-item">Population: {{ country.population }}</li>
        </ul>
      </div>
      <ul class="list-group">
        <li class="list-group-item active">
          Some of the interesting things about {{ country.name }}
        </li>
        <p>It borders the following countries:</p>
        <template v-for="(neighbour, index) in country.borders">
          <li class="list-group-item" :key="index">{{ neighbour }}</li>
        </template>
      </ul>
      <ul class="list-group">
        <p>Do you know you can also spell {{ country.name }} as follows:</p>
        <template v-for="(spelling, index) in country.altSpellings">
          <li class="list-group-item" :key="index">{{ spelling }}</li>
        </template>
      </ul>
      <div class="card-body">
        <router-link to="/" exact class="navbar-brand"
          >Back countries</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import AppService from "../services/AppService";

export default {
  data() {
    return {
      name: this.$route.params.name,
      country: []
    };
  },
  methods: {
    getCountry() {
      AppService.findCountryByName(this.name)
        .then(response => {
          this.country = response.data[0];
          console.log(this.country);
        })
        .catch(e => {
          console.log("The error occurred", e);
        });
    }
  },
  mounted() {
    this.getCountry();
  }
};
</script>

<style scoped>
.countries {
  background-color: #f9f7f6;
}
.navbar-brand {
  background: #768268;
  /* margin: 1.2rem; */
  padding: 0.5rem;
  font-size: 1.4rem;
  color: whitesmoke;
}
.card,
.list-group {
  width: 60% !important;
  margin: 0 auto;
}
.countries-container {
  display: grid;
  margin: 0 auto;
  width: 70rem;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;
}
.section-title h4 {
  text-align: center;
  font-size: 1.6rem;
  text-transform: capitalize;
  color: #768268;
  font-weight: 400;
}
</style>
