import Home from '../components/pages/Home/Home';

import { LazyExoticComponent, lazy } from 'react';

const Man = lazy(() => import("clothes/App"))


type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<any>;
  name?: string
}


export const routes: Route[] = [
  {
    path: "/app_container_devschool",
    to: "/app_container_devschool",
    Component: Home,
    name: "Home"
  },
  {
    path: "/app_container_devschool/man/*",
    to: "/app_container_devschool/man",
    Component: Man
  }
]