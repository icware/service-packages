const prefix = "/test"; //Alterar prefixo

//Definir rotas
const Routers = [
  {
    path: "/test",
    name: "test",

    meta: {
      unprotected: true,
      title: "Rota de teste",
    },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewVue.vue"),
  },

  {
    path: "/test",
    name: "test",

    meta: {
      unprotected: false,
      title: "Rota de teste",
    },

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ViewVue.vue"),
  },
];

//Alterar nome / exportar
const vueRouters = Routers.map((route) => ({
  ...route,
  path: `${prefix}/${route.path}`,
  meta: route.meta,
}));

export default vueRouters;
