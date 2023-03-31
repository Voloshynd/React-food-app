import { useContext, useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import dataContext from "../context";
import { Link } from "react-router-dom";

function Favorites() {
  const context = useContext(dataContext);
  const box = useRef([]);
  const { goBack } = useHistory();
  const [isActive, setIsActive] = useState(false);
  const { dataLikedDish, onDelete } = context;

  const handleEnlarge = (boo, index) => {
    boo
      ? (box.current[index].style.transform = "scale(1.02)")
      : (box.current[index].style.transform = "none");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight <= document.body.offsetHeight) {
        setIsActive((current) => !current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="row">
      {dataLikedDish.length > 0 &&
        dataLikedDish.map((item, i) => {
          return (
            <div className="col s12 m4 favorites-container" key={item.idMeal}>
              <div
                key={i}
                className="card"
                onMouseEnter={() => handleEnlarge(true, i)}
                onMouseLeave={() => handleEnlarge(false, i)}
                ref={(el) => {
                  box.current[i] = el;
                }}
              >
                <div className="card-image">
                  <img src={item.strMealThumb} alt={item.strMeal} />
                  <i
                    className="material-icons delete"
                    onClick={() => onDelete(item.idMeal)}
                  >
                    delete
                  </i>
                </div>
                <div className="card-content">
                  <span className="card-title">
                    {item.strMeal.length > 19
                      ? item.strMeal.slice(0, 19) + "..."
                      : item.strMeal}
                  </span>
                </div>
                <div className="card-action">
                  <Link to={`/meal/${item.idMeal}`} className="btn">
                    {" "}
                    Watch recipe{" "}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      {dataLikedDish.length === 0 ? null : (
        <div className="btn-container">
          <button
            className={`btn back ${isActive ? "shake-bottom" : ""}`}
            onClick={goBack}
          >
            <i className="medium material-icons">keyboard_arrow_left</i> Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export { Favorites };
