import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactButton from "./components/ContactButton/ContactButton";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header";
import AboutPage from "./pages/About";
import CategoryPage from "./pages/Category";
import ContactPage from "./pages/Contact";
import DesignAndConstructionPage from "./pages/DesignAndConstruction";
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
            <DesignAndConstructionPage />
          </Route>
          <Route path="/construction">
            <DesignAndConstructionPage />
          </Route>
          <Route path="/apartment-design">
            <CategoryPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <ContactButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
