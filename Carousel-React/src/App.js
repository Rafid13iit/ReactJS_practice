import "./App.css";
import Carousel from "./components/Carousel";
import { countries } from "./components/Data";

function App() {
  return (
    <div className="App">
      <div className="topContent">
        <h2>Places to Meet</h2>
      </div>
      {/* Carousel */}
      <Carousel images={countries} />
    </div>
  );
}

export default App;
