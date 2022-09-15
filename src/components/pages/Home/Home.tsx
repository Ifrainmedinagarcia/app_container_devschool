import { options } from "../../../db"
import Card from "../../Card/Card"
import "./Home.css"




const Home = () => {

  return (
    <>
      <div className="container__home">
        <img className="main__img" src="https://img.freepik.com/foto-gratis/joven-tiro-medio-probandose-chaqueta_23-2149536991.jpg?w=2000&t=st=1662831020~exp=1662831620~hmac=ac866cf77347ffbb7a99ef79174266336ae9faadf647343d80316304dcf7a149" alt="clothes" />
      </div>
      <div className="container__cards">
        {options.map(({ name, img, to }) => (
          <Card key={img} category={name} img={img} to={to} />
        ))}
      </div>
    </>
  )
}

export default Home

