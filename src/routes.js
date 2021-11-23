import { lazy } from "react";

const HomePage = lazy(() =>
  import("./view/HomePage" /* webpackChunkName: 'Home page'*/)
);

const ContactsPage = lazy(() =>
  import("./view/ContactsPage" /* webpackChunkName: 'Contacts page'*/)
);

const RegisterPage = lazy(() =>
  import("./view/RegisterPage" /* webpackChunkName: 'Register page'*/)
);

const LoginPage = lazy(() =>
  import("./view/LoginPage" /* webpackChunkName: 'Login page'*/)
);

export const NotFound = lazy(() =>
  import("./view/NotFoundPage" /* webpackChunkName: 'Page not found'*/)
);

export const routes = [
  {
    id: 101,
    name: "Home page",

    path: "/",
    component: HomePage,
  },
  {
    id: 102,
    name: "Register page",

    path: "/register",
    component: RegisterPage,
  },

  {
    id: 103,
    name: "Contacts page",

    path: "contacts",
    component: ContactsPage,
  },
  {
    id: 105,
    name: "Login page",

    path: "login",
    component: LoginPage,
  },

  {
    id: 104,
    name: "Not found page",

    path: "*",
    component: NotFound,
  },
];
