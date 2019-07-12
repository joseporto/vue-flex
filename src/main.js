import Vue from 'vue'
import App from './App.vue'
import VueFlex from './components/index.js'

Vue.use(VueFlex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
