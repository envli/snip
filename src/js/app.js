import Vue from 'vue'
import VueRouter from 'vue-router'
// import Trend from "vuetrend";

import Xhr from "./lib/xhr";
require('./lib/notify');
require('./lib/helper');

window._ = {
  debounce: require("lodash/debounce")
};

// Vue.use(Trend);
Vue.use(VueRouter)

let xhrClass = new Xhr();
Vue.prototype.$http = xhrClass;

Vue.component('app-form', require('./components/Form.vue'));

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { name: 'home', path: '/', component: require('./components/Home.vue') },
  // { name: 'site.add', path: '/site/add', component: require('./SiteAdd.vue') },
  // { name: 'site', path: '/site/:id', component: require('./Site.vue') },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  // mode: "history",
  routes // short for `routes: routes`
});

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
    components: {
        layout: require('./components/Layout.vue')
    },
    router
}).$mount("#app-container");

