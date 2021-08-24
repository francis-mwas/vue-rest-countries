import CountriesList from "./components/CountriesList.vue";
import SingleCountry from "./components/SingleCountry";

export default [
  { path: "/", component: CountriesList },
  { path: "/countries/:name", component: SingleCountry }
];
