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

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ListServices />
      <ListServiceDetails />
      <SloganBanner />
      <IntroModal />
      <ListProject />
      <ListStep />
      <Footer />
    </div>
  );
}

export default App;
