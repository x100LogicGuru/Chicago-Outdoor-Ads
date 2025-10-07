import "./App.css";
import Navigation from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Products from "./Components/Products/Product.jsx";
import SecImg from "./Components/SecImg/SecImg.jsx";
import SubSec from "./Components/SubSec/SubSec.jsx";
import Flex from "./Components/Flex/Flex.jsx";
import ImgSec from "./Components/ImgSec/ImgSec.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.jsx";
import Analytics from "./Components/Analytics/Analytics.jsx";

function App() {
  return (
    <ErrorBoundary>
      <Analytics />
      <Navigation />
      <Hero />
      <Products />
      <SecImg />
      <SubSec />
      <Flex />
      <ImgSec />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
