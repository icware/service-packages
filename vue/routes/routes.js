const vueRouts = [
  {
    path: "/test",
    name: "test",

    meta: {
        unprotected:true,
        title:'Rota de teste'
    }

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewVue.vue"),
  },

  {
    path: "/test",
    name: "test",

    meta: {
        unprotected:false,
        title:'Rota de teste'
    }

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewVue.vue"),
  },

];
