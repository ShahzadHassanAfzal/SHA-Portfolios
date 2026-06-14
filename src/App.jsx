import AnimatedRoutes from "./components/custom/AnimatedRoutes";
import Navbar from "./components/custom/Navbar";
import ScrollToTop from "./components/custom/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
