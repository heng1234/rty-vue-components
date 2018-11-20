import Vue from "vue";
import Router from "vue-router";
import indexPage from "@/example/index";
import rtyProgress from "@/example/rtyProgress";
import rtyButton from "@/example/rtyButton";
import rtyDialog from "@/example/rtyDialog";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "indexPage",
      component: indexPage
    },
    {
      path: '/rtyProgress',
      name: 'rtyProgress',
      component: rtyProgress
    },
    {
      path: '/rtyButton',
      name: 'rtyButton',
      component: rtyButton
    },
    {
      path: '/rtyDialog',
      name: 'rtyDialog',
      component: rtyDialog
    }
  ]
});
