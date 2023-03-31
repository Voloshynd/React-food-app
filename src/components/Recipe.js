import { useParams, useHistory } from "react-router-dom";
import { getMealByID } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "./Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getMealByID(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

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
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            style={{ borderRadius: "10px", marginTop: "10px" }}
          />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Location: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered striped">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>

            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row" style={{ textAlign: "center" }}>
              <h5 style={{ margin: "2rem o 1.5rem" }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                ng-show="showvideo"
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <div className="btn-container">
        <button
          className={`btn back ${isActive ? "shake-bottom" : ""}`}
          onClick={goBack}
        >
          <i className="medium material-icons">keyboard_arrow_left</i> Go Back
        </button>
      </div>
    </>
  );
}

export { Recipe };
