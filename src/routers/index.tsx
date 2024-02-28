import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home";
import { Practice } from "../pages/Practice";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/practice", component: Practice, layout: DefaultLayout },
];
export const privateRoutes: string[] = [];
