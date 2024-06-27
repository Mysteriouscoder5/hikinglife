import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HikingAndCamping from "./components/HikingAndCamping";
import IceClimbing from "./components/IceClimbing";
import PlacesToVisit from "./components/PlacesToVisit";
import RockClimbing from "./components/RockClimbing";
import TheAsanas from "./components/TheAsanas";

function App() {
  return (
    <>
      <main>
        <Hero />
        <HikingAndCamping />
        <RockClimbing />
        <PlacesToVisit />
        <IceClimbing />
        <TheAsanas />
        <Footer/>
      </main>
    </>
  );
}

export default App;
