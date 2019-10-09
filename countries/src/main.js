import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue ()

new Vue({
  render: h => h(App),
}).$mount('#app')


// //What is an Event Bus? Well, it’s kind of summed up in the name itself.
// It’s a mode of transportation for one component to pass props from one component
//  to another, no matter where those components are located in the tree.
