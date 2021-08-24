import http from "../http-calls";

class CountriesDataService {
  getAll() {
    return http.get("/all");
  }

  findCountryByName(name) {
    return http.get(`/name/${name}`);
  }
}

export default new CountriesDataService();
