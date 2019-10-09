<template lang="html">
  <div class="filter">
    <ul>
      <country-option v-for="(country, index) in countries" :country="country" :key="index"></country-option>
    </ul>
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
    handleSelected(event){
      eventBus.$emit('country-selected', event.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
