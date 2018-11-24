import firebaseui from 'firebaseui';
import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'
import firebaseApp from './helpers/firebaseInit'
import router from './router'

// turns off the 'You are running Vue in development mode.' msg
Vue.config.productionTip = false

// Plugins
Vue.use(VueFire);
Vue.use(VueRouter)

// Starts Vue app with App.vue
new Vue({
  render: h => h(App),
  router,
  created() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/success')
      } else {
        this.$router.push('/auth')
      }
     });
    },
}).$mount('#app')
