import Home from '../components/pages/Home/Home';

import { LazyExoticComponent, lazy } from 'react';

const Store = lazy(() => import("store/App"))


type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<any>;
  name?: string
}


export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Home,
    name: "Home"
  },
  {
    path: "/store/*",
    to: "/store/all",
    Component: Store
  }
]