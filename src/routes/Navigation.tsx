import { Routes, Route, Navigate } from "react-router-dom"
import { routes } from "./routes"
import Header from "../shared/components/Header/Header"


const Navigation = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component />}/>))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>

    </>
  )
}

export default Navigation
