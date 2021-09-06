import "./App.css";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Carousel />
      </main>
    </div>
  );
}

export default App;
