<template>
  <section class="countries">
    <div class="section-title">
      <h2>Welcome to countries searching platform</h2>
      <div class="under-line"></div>
    </div>
    <div class="input-group mb-3 form-center">
      <input
        type="text"
        v-model="name"
        class="form-control"
        placeholder="Search a country by name"
      />
      <div class="input-group-append">
        <button
          @click="searchByName"
          class="btn btn-outline-secondary"
          type="button"
        >
          Search a county
        </button>
      </div>
    </div>

    <div class="countries-container">
      <div
        class="country-box"
        v-for="(country, index) in countries"
        :key="index"
      >
        <img
          v-bind:src="country.flag"
          alt="Country Flag"
          v-on:click="showBox = !showBox"
        />

        <span class="hide-box" v-bind:class="{ showBox: showBox }">
          <h4 class="country-box__title">{{ country.name }}</h4>
          <h4 class="country-box__region">
            Area: <span class="left">{{ country.area }}</span>
          </h4>
          <h4 class="country-box__nativename">
            region: <span class="left">{{ country.region }}</span>
          </h4>
          <h4 class="country-box__population">
            Population:
            <span class="left population-bold">{{ country.population }}</span>
          </h4>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import AppService from "../services/AppService";

export default {
  name: "countries-list",
  data() {
    return {
      countries: [],
      name: "",
      showBox: false,
      hideBox: true
    };
  },
  methods: {
    retrieveTutorials() {
      AppService.getAll()
        .then(response => {
          this.countries = response.data;
          console.log("The countries: ", this.countries);
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchByName() {
      AppService.findCountryByName(this.name)
        .then(response => {
          this.countries = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      this.name = "";
    }
  },
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.countries {
  background-color: #f9f7f6;
}
.section-title {
  text-align: center;
  margin-bottom: 5rem;
}
.under-line {
  width: 12rem;
  height: 0.5rem;
  background-color: #990606;
  margin: 0 auto;
}
.section-title h2 {
  font-size: 2.5rem;
  text-transform: capitalize;
  color: #768268;
  font-weight: 700;
}
.countries-container {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2rem;
}
.country-box {
  background-color: #fff;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 15%);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s;
  border: 1px solid #d7d7d7;
  transition: all 0.3s;
}
.country-box__title {
  background-color: #768268;
  padding: 0.55rem;
  font-size: 1rem;
  text-align: center;
  margin: 0 3rem;
  color: whitesmoke;
  transform: translateY(-63%);
  font-family: "Josefin Sans", sans-serif;
}
.country-box img {
  width: 100%;
}
.country-box__region,
.country-box__nativename,
.country-box__population {
  font-size: 1.1rem;
  margin: 0 1rem;
  color: #990606;
}
.country-box__text {
  font-size: 1.2rem;
  text-align: center;
  margin: 1.1rem;
  font-weight: 300;
}
.left {
  float: right;
}
.population-bold {
  /* width: 20%; */
  height: 20%;
  text-align: center;
  background-color: #768268;
  padding: 0.5rem;
  border-radius: 3%;
  color: whitesmoke;
}
.form-center {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem !important;
}
.hide-box {
  opacity: 0;
  visibility: hidden;
  display: none;
}
.showBox {
  opacity: 1;
  visibility: visible;
  display: block;
}
.country-box img:hover {
  cursor: pointer;
}
.country-box:hover {
  transform: translateY(-1.01rem) scale(1.01);
}
</style>
