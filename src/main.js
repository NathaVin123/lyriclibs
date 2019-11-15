import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: { key: "AIzaSyBLUR1h1gAQCqeSVV_JvPBBE1DoXFtdg4U" }
});

Vue.config.productionTip = false
new Vue({
  router,
  VueGoogleMaps,
  vuetify,
  render: h => h(App)
}).$mount('#app')