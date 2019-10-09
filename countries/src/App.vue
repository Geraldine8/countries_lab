<template lang="html">
  <div class="">
    <h2>Countries</h2>
    <div class="wrapper">
      <countries-list :countries='countries'></countries-list>
      <country-detail :country='selectedCountry'></country-detail>
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import CountriesList from './components/CountriesList.vue';
import CountryDetail from './components/CountryDetail.vue';


export default {
  name: 'app',
  data(){
    return {
      countries: [],
      selectedCountry: null

    };
  },
  mounted(){
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countries => this.countries = countries)

    eventBus.$on('country-selected', (country)=> {
      this.selectedCountry = country;
    })
  },

  components: {
    "countries-list": CountriesList,
    "country-detail": CountryDetail
  }
}

</script>

<style lang="css" scoped>
  .wrapper {
    display: flex;
    justify-content: space-between;
  }
</style>


 <!-- Components: They help you extend basic HTML elements to encapsulate reusable code.
 At a high level, Components are custom elements that Vue.js’ compiler would attach
 specified behavior to -->

<!-- The on() method is used to listen to the event that on the
 EventBus. It receives two parameters. The first is the event name
 and the second is the callback method. -->
