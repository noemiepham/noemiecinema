import "./layout.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer2/Footer";
import Header from "../Header2/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
