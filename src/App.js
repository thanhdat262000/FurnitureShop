import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OpeningModal from "./containers/OpeningModal/OpeningModal";
import AboutContent from "./containers/AboutContent/AboutContent";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <OpeningModal />
            <AboutContent />
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
