import "./App.css";
import Header from "./containers/Header";
import Slider from "./components/Slider/SliderContent/Slider";
import ListServices from "./containers/ListServices/ListServices";
import ListServiceDetails from "./containers/ListServiceDetails/ListServiceDetails";
import SloganBanner from "./components/SloganBanner/SloganBanner";
import IntroModal from "./containers/IntroModal/IntroModal";
import ListProject from "./containers/ListProjects/ListProject";
import ListStep from "./containers/ListStep/ListStep";
import Footer from "./containers/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OpeningModal from "./containers/OpeningModal/OpeningModal";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about">
            <OpeningModal />
          </Route>
          <Route path="/">
            <Slider />
            <ListServices />
            <ListServiceDetails />
            <SloganBanner />
            <IntroModal />
            <ListProject />
            <ListStep />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
