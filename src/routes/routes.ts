import Home from '../components/pages/Home/Home';

import { LazyExoticComponent, lazy } from 'react';

const Store = lazy(() => import("store/App"))
const Register = lazy(() => import("register_page/App"))


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
    name: "Hola"
  },
  {
    path: "/store/*",
    to: "/store/all",
    Component: Store
  },
  {
    path: "/become-partner",
    to: "/become-partner",
    Component: Register
  }
]