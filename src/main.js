import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import axios from "axios";
import "nprogress/nprogress.css";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyDDBdxgtll3n4VH8Tm61kkihdgMbaE_--Y",
    authDomain: "password-wallet-4d12d.firebaseapp.com",
    databaseURL: "https://password-wallet-4d12d.firebaseio.com",
    projectId: "password-wallet-4d12d",
    storageBucket: "password-wallet-4d12d.appspot.com",
    messagingSenderId: "268238730875",
    appId: "1:268238730875:web:83dc3583714acabbc954de",
    measurementId: "G-HMZVYHYS55"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
