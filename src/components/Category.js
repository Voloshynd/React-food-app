import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFilteredByCategory } from "../api";
import { Preloader } from "./Preloader";
import { MealList } from "./MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getFilteredByCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

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
    <>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
      <div className="btn-container">
        <button
          className={`btn back ${isActive ? "shake-bottom" : ""}`}
          onClick={goBack}
        >
          <i className="medium material-icons">keyboard_arrow_left</i> Go back
        </button>
      </div>
    </>
  );
}

export { Category };
