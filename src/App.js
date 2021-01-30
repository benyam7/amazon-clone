import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* /checkout/:someId/page */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          {/* this is the default one, so like if user goes to 
          some undefined path it will redirect him to home page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
