import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import PasswordWallet from '../views/PasswordWallet.vue'
import nprogress from "nprogress"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/passWallet",
    name: "passWallet",
    component: PasswordWallet,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  nprogress.start();
  next();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
