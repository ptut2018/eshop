// import Vue from 'vue/dist/vue.js'
// import App from './vue/App.vue'
import 'whatwg-fetch'
import Radio from './components/radio.js'
import Counter from './components/counter.js'
import FollowOrder from './components/follow-order.js'
import Product from './components/product.js'

// Set snipcart default currency
Snipcart.api.cart.currency('usd');

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
