import { Form, Button, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/brandname.jpg";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchkey, setSearchKey] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar key="lg" expand="lg" className="container-header">
        <Container fluid>
          <Navbar.Brand>
            <img src={logo} alt="logo" className="logonoemie"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/anime">Anime</Nav.Link>
                <Nav.Link href="/tvshows">TV Shows</Nav.Link>
                <Nav.Link href="/allfilms">All</Nav.Link>
                <NavDropdown title="En" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">Fr</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Vn</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchkey}
                  onChange={(e) => setSearchKey(e.taget.value)}
                />
                <Button
                  variant="outline-success"
                  onClick={() => navigate("SearchPages")}
                >
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
/*     <>
      <Navbar
        data-bs-theme="dark"
        sticky="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container className="container-header" fluid>
          <Navbar.Brand>
            <img src={logo} alt="logo" className="logonoemie"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/films">Films</Nav.Link>
              <Nav.Link href="/anime">Anime</Nav.Link>
              <Nav.Link href="/cartoon">Cartoon</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> 
    );
  }
    */
