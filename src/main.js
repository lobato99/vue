import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import lista from './components/lista.vue'
import noticias from './components/noticias.vue'
import olimpiadas from './components/olimpiadas.vue'


Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {path:'/lista',component:lista},
  {path:'/noticias',component:noticias},
  {path:'/olimpiadas',component:olimpiadas},
  {path:'/*',component:olimpiadas},
]



const router=new VueRouter({routes})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
