import "./App.css";
import Header from "./containers/Header";
import Slider from "./components/Slider/SliderContent/Slider";
import ListServices from "./containers/ListServices/ListServices";
import ListServiceDetails from "./containers/ListServiceDetails/ListServiceDetails";
import SloganBanner from "./components/SloganBanner/SloganBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ListServices />
      <ListServiceDetails />
      <SloganBanner />
    </div>
  );
}

export default App;
