import "./layout.css";
import { Outlet } from "react-router-dom";
import Header from "pages/Header/Header";
import Footer from "pages/Footer/Footer";

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
