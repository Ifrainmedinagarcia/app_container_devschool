import { NavLink } from "react-router-dom"
import { routes } from "../../../routes/routes"
import "./Header.css"


const Header = () => {
  return (
    <header>
    <nav className="header__nav">
      <ul className="menu">
        {routes.map(({ to, name }) =>
          <NavLink key={name} to={to} className={({ isActive }) => isActive ? "nav-active" : "nav"}>{name}</NavLink>
        )}
      </ul>
      <div className="car">
        {/* <div className="amount">1</div> */}
        <img className="car__img" src="https://cdn-icons-png.flaticon.com/512/1011/1011286.png?w=1480&t=st=1662857836~exp=1662858436~hmac=d5969d0984dbfe9dbdf07ff7336f1eb2a3d863a3e117d91df64ad52d7c45237c" alt="" />
      </div>
    </nav>
  </header>
  )
}

export default Header
