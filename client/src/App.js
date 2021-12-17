import './App.css';
import Navbar from "./components/navbar/Navbar";
import Landing from './pages/landing/Landing';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Welcome from './pages/welcome/Welcome';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Ingredients from './pages/products/ingredients/Ingredients';
import Recipes from './pages/products/recipes/Recipes';
import Article from './pages/article/Article';
import Cart from './pages/cart/Cart';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import Shipping from './pages/shipping/Shipping';
import RedirectToNotFound from "./components/redirectToNotFound/RedirectToNotFound";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const DefaultRoutes = () => {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart/" component={Cart} />
          <Route path="/shipping" component={Shipping} />

          <Route path="/ingredients/:categoryId" component={Ingredients} />
          <Route path="/recipes/:categoryId" component={Recipes} />
          <Route path="/article/:articleId" component={Article} />

          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          {/* <Route component={RedirectToNotFound} /> */}
        </Switch>
      </>
    );
  };

  return (
    <Router>
        <Switch>
            {/*Toujours ajouter 'exact' pour la racine ! */}
            <Route exact path="/" component={Landing} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/welcome" component={Welcome} />
            {/* <Route path="/not-found" component={My404Page} /> */}
            <Route component={DefaultRoutes} />
        </Switch>
    </Router>
  );
}

export default App;
