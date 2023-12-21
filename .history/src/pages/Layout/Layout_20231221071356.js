import "./layout.css";
import { Outlet } from "react-router-dom";
import Header 
import Footer from "../Footer/Footer";

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
