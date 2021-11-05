import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index";

const hash = createWebHashHistory();
const router = createRouter({
  history: hash,
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("@/views/Home.vue"),
      meta: {
        auth: true,
        keepAlive: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: {
        auth: false,
        keepAlive: false,
        hide: true,
      },
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
      meta: {
        auth: true,
        keepAlive: false,
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   let auth = to.meta.auth;
//   let token = store.state.token;
//   //   console.log(auth, token);

//   if (auth && !token) {
//     next({
//       path: "/login",
//       query: {
//         fullPath: to.fullPath,
//       },
//     });
//   } else {
//     next();
//   }
// });

export default router;
