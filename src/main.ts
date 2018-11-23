import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'

// turns off the 'You are running Vue in development mode.' msg
Vue.config.productionTip = false

// Use VueFire plugin
Vue.use(VueFire);

// Starts Vue app with App.vue
new Vue({
  render: h => h(App),
}).$mount('#app')
