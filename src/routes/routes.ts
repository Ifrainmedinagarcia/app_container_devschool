import Home from '../components/pages/Home/Home';

import { LazyExoticComponent } from 'react';


type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Home,
    name: "Home"
  },
  /* {
    path: "/vender",
    to: "/vender",
    Component: Man,
    name: "Vender"
  } */
]