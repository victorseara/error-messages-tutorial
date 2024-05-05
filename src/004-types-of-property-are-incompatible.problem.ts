type Route = {
  path: string;
  component: string;
};

type RouteConfig = {
  routes: Route[]; 
}

const routingConfig = {
  routes: [
    {
      path: "home",
      component: "HomeComponent",
    },
    {
      path: "about",
      component: 12,
    },
    {
      path: "contact",
      component: "ContactComponent",
    },
  ],
} satisfies RouteConfig;

const createRoutes = (config: {
  routes: {
    path: string;
    component: string | number;
  }[];
}) => {};

createRoutes(routingConfig);
