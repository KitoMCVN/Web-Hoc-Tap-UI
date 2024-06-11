import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home";
import { Practice } from "../pages/Practice";
import { Keyboard } from "../pages/Keyboard";
import { VideoPlay } from "../pages/VideoPlay";
import { Mouse } from "../pages/Mouse";
import { DeOn } from "../pages/DeOn";
import De from "../pages/De/De";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/practice", component: Practice, layout: DefaultLayout },
  { path: "/practice/keyboard", component: Keyboard, layout: DefaultLayout },
  { path: "/practice/mouse", component: Mouse, layout: DefaultLayout },
  { path: "/video", component: VideoPlay, layout: DefaultLayout },
  { path: "/de-on", component: DeOn, layout: DefaultLayout },
  { path: "/de", component: De, layout: DefaultLayout },
];
export const privateRoutes: string[] = [];
