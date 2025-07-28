import "./App.css";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Reason from "./components/Reasons/Reason";
import Plans from "./components/Plans/Plans";
import Testimonial from "./components/Testimonial/Testimonial";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Hero />
      <Program />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
      <Footer/>
    </>
  );
}

export default App;
