import Navbar from "./components/custom/Navbar";
import AnimatedRoutes from "./components/custom/AnimatedRoutes";
import Footer from "./components/custom/Footer";
import ScrollToTop from "./components/custom/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
