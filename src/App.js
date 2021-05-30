import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header";
import AboutPage from "./pages/About";
import Design from "./pages/Design";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
