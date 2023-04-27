import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNav from "./components/MyNav";
import HeroSec from "./components/HeroSec";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <MyNav />
      <HeroSec />
      <ContactUs />
    </>
  );
}

export default App;
