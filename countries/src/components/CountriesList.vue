<template lang="html">
  <div class="filter">
    <br>
    <select v-on:change="handleSelected"><!-- /cuando select cambie de valor va a llamar handleSelected -->
      <option>Select country</option>
      <country-option v-for="(country, index) in countries" :country="country" :key="index"></country-option>
    </select>
  </div>

</template>


<script>
import CountryOption from './CountryOption.vue';
import{ eventBus } from '../main.js'
export default {
  name: 'countries-list',
  props: ['countries'],
  components: {
    "country-option": CountryOption
  },
  methods: {
    handleSelected(event){ // maneja el element seleccionado en handleselected
      const country = this.countries.find(country => country.alpha3Code === event.target.value)
      eventBus.$emit('country-selected', country)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<!--
What is an Event Bus? Well, it’s kind of summed up in the name itself.
It’s a mode of transportation for one component to pass props from one component to another,
 no matter where those components are located in the tre -->
