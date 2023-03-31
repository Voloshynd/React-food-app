import { Link } from "react-router-dom";
import { useRef } from "react";

function CategoryItem(props) {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props;
  const box = useRef(null);
  const handleEnlarge = (boo) => {
    boo
      ? (box.current.style.transform = "scale(1.02)")
      : (box.current.style.transform = "none");
  };
  return (
    <div
      className="card"
      onMouseEnter={() => handleEnlarge(true)}
      onMouseLeave={() => handleEnlarge(false)}
      ref={box}
    >
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          {" "}
          Watch category{" "}
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
