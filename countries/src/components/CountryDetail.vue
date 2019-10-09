<template lang="html">
  <div v-if='country'>
    <h3>Country: {{country.name}}</h3>
    <p>Capital: {{country.capital}}</p>
    <p>Population: {{country.population}}</p>
    <p>Region: {{country.region}}</p>
    <p>Language:
       <span v-for="(Language) in country.languages">
          {{Language.name}},
       </span>

     </p>
  </div>
</template>

<script>
export default {
  name: 'country-detail',
  props: ['country']
}
</script>

<style lang="css" scoped>
</style>
