import "./App.css";
import Header from "./containers/Header";
import Slider from "./components/Slider/SliderContent/Slider";
import ListServices from "./containers/ListServices/ListServices";
import ListServiceDetails from "./containers/ListServiceDetails/ListServiceDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ListServices />
      <ListServiceDetails />
    </div>
  );
}

export default App;
