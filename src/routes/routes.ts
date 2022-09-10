import Home from '../components/Home';


type JSXComponent = () => JSX.Element

interface Route{
  path: string;
  to: string;
  Component: JSXComponent;
  name: string
} 

export const routes: Route[] = [
  {
    path:"/",
    to:"/",
    Component: Home,
    name: "Home"
  },
 /*  {
    path:"/mfe1",
    to:"/mfe1",
    //Component: "App",
    name: "MFE1"
  },
  {
    path:"/mfe2",
    to:"/mfe2",
    //Component: "App",
    name: "MFE2"
  } */
]