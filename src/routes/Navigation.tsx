import { routes } from "./routes";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Suspense } from 'react';
import Header from "../shared/components/Header/Header";



const Navigation = (): JSX.Element => {
  return (
    <Suspense fallback={<span>Cargando...</span>}>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component />} />))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation
