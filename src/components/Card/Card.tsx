import { Link } from "react-router-dom";
import "./Card.css"

interface Props {
  img: string;
  category: string;
  to: string
}

const Card = ({ img, category, to }: Props): JSX.Element => {
  return (
    <div className="card__container">
      <Link className="link__category" to={to}>
        <div className="categories__name">
          {category}
        </div>
      </Link>
      <img className="img__card" src={img} alt="" />
    </div>
  )
}

export default Card
