
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Navbar";
import Home from "./Home";
import Extra from "./Extra";
import Contact from "./Contact";
const App = () => { 
  return (
    <header className="vh-100 ">
      <NavbarComponent />
      <Home />
      <Extra />
      <Contact />
    </header>
  );
}

export default App;
