import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home";
import { Practice } from "../pages/Practice";
import { Keyboard } from "../pages/Keyboard";
import { VideoPlay } from "../pages/VideoPlay";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/practice", component: Practice, layout: DefaultLayout },
  { path: "/practice/keyboard", component: Keyboard, layout: DefaultLayout },
  { path: "/video", component: VideoPlay, layout: DefaultLayout },
];
export const privateRoutes: string[] = [];
