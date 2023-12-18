import "./layout.css";
import { Container } from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container fluid>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
