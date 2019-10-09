<template lang="html">
  <option :value="country.alpha3Code">{{country.name}}</option>
</template>

<script>
import{ eventBus } from '../main.js'
export default {
  name: 'country-option',
  props: ['country'],
  methods: {
    handleClick(){
      eventBus.$emit('country-selected', this.country)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

<!-- The emit() method is used to publish the message.
It receives two parameters. The first is the event name and
the second is the data to be passed. -->
