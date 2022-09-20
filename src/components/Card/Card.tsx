import { Link } from "react-router-dom";
import "./Card.css"

interface Props {
  img: string;
  category: string;
  to: string
}

const Card = ({ img, category, to }: Props): JSX.Element => {
  return (
    <Link className="link__category" to={to}>
      <div className="card__container">
        <div className="categories__name">
          {category}
        </div>
        <img className="img__card" src={img} alt="" />
      </div>
    </Link>
  )
}

export default Card
