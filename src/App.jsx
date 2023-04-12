import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      <Footer />
    </>
  );
}

export default App;
