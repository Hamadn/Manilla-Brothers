import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
