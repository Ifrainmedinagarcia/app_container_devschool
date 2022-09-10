import "./Header.css"
import { routes } from '../../../routes/routes';
import { Routes, NavLink, Route, Navigate } from "react-router-dom"



const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <ul className="menu">
          {routes.map(({ to, name }) =>
            <NavLink key={name} to={to} className={({ isActive }) => isActive ? "nav-active" : "nav"}>{name}</NavLink>
          )}
        </ul>
      </nav>
      <Routes>
        {routes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component/>}/>))}
        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
      </Routes>
    </header>
  )
}

export default Header
