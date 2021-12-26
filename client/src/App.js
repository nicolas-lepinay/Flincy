import './App.css';
import Navbar from "./components/navbar/Navbar";
import Landing from './pages/landing/Landing';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Welcome from './pages/welcome/Welcome';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import Products from './pages/products/Products';
import Article from './pages/article/Article';
import Cart from './pages/cart/Cart';
import Profile from './pages/profile/Profile';
import About from './pages/about/About';
import Shipping from './pages/shipping/Shipping';

import RedirectToNotFound from "./components/redirectToNotFound/RedirectToNotFound";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {

  const user = true;

  const DefaultRoutes = () => {
    return (
      <>
        <Navbar />
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/products" component={Categories} />
            <Route path="/cart/" component={Cart} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/ingredients/:categoryId" component={Products} />
            <Route path="/article/:articleId" component={Article} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/recipes/:categoryId" component={Products} />
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

            <Route path="/sign-in">
              {user ? <Redirect to="/home" /> : <Signin/>}
            </Route>

            <Route path="/sign-up">
              {user ? <Redirect to="/home" /> : <Signup/>}
            </Route>

            <Route path="/welcome" component={Welcome} />
            {/* <Route path="/not-found" component={My404Page} /> */}
            <Route component={DefaultRoutes} />
        </Switch>
    </Router>
  );
}

export default App;
