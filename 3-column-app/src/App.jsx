import "./App.css";
import CarCard from "./components/CarCard";

function App() {
  return (
    <main className="car-main">
      <CarCard color={"orange"} />
      <CarCard color={"teal"} />
      <CarCard color={"darkgreen"} />
    </main>
  );
}

export default App;
