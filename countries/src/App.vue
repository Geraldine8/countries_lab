<template lang="html">
  <div class="main-cointaner">
    <h2>Countries</h2>
    <div class="wrapper">
      <countries-list :countries='countries'></countries-list>
      <country-detail :country='selectedCountry' class="culo"></country-detail>
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
    justify-content: space-around;
    /* background-color: #CBF3F0; */
  }

  h2 {
    text-align: center;
  }
  .main-cointaner {
    text-align: justify;
    /* background-color: #CBF3F0; */

  }
  .culo {
    border-style: inset;
    /* border: 3px solid red; */
    width: 20%;
    padding: 10px;
  }

</style>


 <!-- Components: They help you extend basic HTML elements to encapsulate reusable code.
 At a high level, Components are custom elements that Vue.js’ compiler would attach
 specified behavior to -->

<!-- The on() method is used to listen to the event that on the
 EventBus. It receives two parameters. The first is the event name
 and the second is the callback method. -->

<!--
What is an Event Bus? Well, it’s kind of summed up in the name itself.
It’s a mode of transportation for one component to pass props from one component to another,
 no matter where those components are located in the tre -->
