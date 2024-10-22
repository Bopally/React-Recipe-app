import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

//import data from "./recipes.json";

function App() {
  return (
    <div className="App">
      <SideBar />

      <div className="Main">
        <NavBar id="navBar" />
        <div className="Content">Text TBD</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
