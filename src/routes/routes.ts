import Home from '../components/pages/Home/Home';
import Vender from '../components/pages/Vender';


type JSXComponent = () => JSX.Element

interface Route {
  path: string;
  to: string;
  Component: JSXComponent;
  name: string
}

export const routes: Route[] = [
  {
    path: "/",
    to: "/",
    Component: Home,
    name: "Home"
  },
  {
    path: "/vender",
    to: "/vender",
    Component: Vender,
    name: "Vender"
  }
]