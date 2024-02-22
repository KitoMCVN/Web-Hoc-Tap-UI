import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";

export const publicRoutes = [{ path: "/", component: Home, layout: DefaultLayout }];
export const privateRoutes: string[] = [];
