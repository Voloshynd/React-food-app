import { CategoryItem } from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <>
      {!catalog.length ? (
        <h1>Nothing found! Please tray again!</h1>
      ) : (
        <div className="list">
          {catalog.map((el) => (
            <CategoryItem key={el.idCategory} {...el} />
          ))}
        </div>
      )}
    </>
  );
}

export { CategoryList };
