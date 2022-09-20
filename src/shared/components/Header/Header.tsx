import { NavLink } from "react-router-dom"
import { routes } from "../../../routes/routes"
import "./Header.css"



const Header = () => {
  return (
    <header>
      <nav className="header__nav">
        <ul className="menu">
          {routes.map(({ name, to }) => {
            if (!name) return
            return (
              <NavLink key={to} to={to} className={({ isActive }) => isActive ? "nav-active" : "nav"}>{name}</NavLink>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
