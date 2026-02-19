import "./App.css";
import CarCard from "./components/CarCard";
import { cars } from "./data/cars";

function App() {
  const sedan = cars[0];
  const suv = cars[1];
  const luxury = cars[2];

  console.log(typeof sedan);

  return (
    <section className="car-section">
      <CarCard car={sedan} />
      <CarCard car={suv} />
      <CarCard car={luxury} />
    </section>
  );
}

export default App;
