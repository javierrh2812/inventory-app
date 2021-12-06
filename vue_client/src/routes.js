import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Registro1 from "./views/Registro1.vue";
import Registro2 from "views/Registro2.vue";
import Reporte1 from "views/Reporte1.vue";
import Reporte2 from "views/Reporte2.vue";

export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/registro1", component: Registro1, meta: { title: "Registro 1" } },
  { path: "/registro2", component: Registro2, meta: { title: "Registro 2" } },
  { path: "/reporte1", component: Reporte1, meta: { title: "Reporte 1" } },
  { path: "/reporte2", component: Reporte2, meta: { title: "Reporte 2" } },
  { path: "/about", meta: { title: "About" }, component: About },
  { path: "/:path(.*)", component: NotFound },
];
