import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <UpcomingEvents />
    </div>
  );
};

export default App;
