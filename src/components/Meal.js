import { Link } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import dataContext from "../context";

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;
  const context = useContext(dataContext);
  const { onLiked } = context;

  const [clicked, setClicked] = useState(false);
  const box = useRef(0);

  const handleEnlarge = (boo) => {
    boo
      ? (box.current.style.transform = "scale(1.02)")
      : (box.current.style.transform = "none");
  };

  const handleClick = () => {
    setClicked((prev) => !prev);
    const dish = {
      strMeal,
      idMeal,
      strMealThumb,
      favorite: !clicked,
    };

    onLiked(dish);
  };

  return (
    <div
      className="card"
      onMouseEnter={() => handleEnlarge(true)}
      onMouseLeave={() => handleEnlarge(false)}
      ref={box}
    >
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
        <i className="material-icons favorite" onClick={() => handleClick()}>
          {clicked ? "favorite" : "favorite_border"}
        </i>
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          {" "}
          Watch recipe{" "}
        </Link>
      </div>
    </div>
  );
}

export { Meal };
