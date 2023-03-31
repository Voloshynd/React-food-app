import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/About";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Category } from "./components/Category";
import { Recipe } from "./components/Recipe";
import { useState } from "react";
import dataContext from "./context";

function App() {
  const [dataLikedDish, setDataLiked] = useState([]);

  const onDelete = (id) => {
    setDataLiked([...dataLikedDish.filter((item) => item.idMeal !== id)]);
  };

  const onLiked = (dish) => {
    console.log(dish);

    if (
      dish.favorite === true &&
      dataLikedDish.every((item) => {
        return item.idMeal !== dish.idMeal;
      })
    ) {
      setDataLiked([...dataLikedDish, dish]);
    } else if (
      dish.favorite === false &&
      dataLikedDish.some((item) => {
        return item.idMeal === dish.idMeal;
      })
    ) {
      setDataLiked([
        ...dataLikedDish.filter((item) => item.idMeal !== dish.idMeal),
      ]);
    } else {
      return;
    }
  };

  const value = { onLiked, dataLikedDish, onDelete };

  const { Provider } = dataContext;

  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Provider value={value}>
              <Route path="/about" component={About} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/category/:name" component={Category} />
              <Route path="/meal/:id" component={Recipe} />
            </Provider>
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
