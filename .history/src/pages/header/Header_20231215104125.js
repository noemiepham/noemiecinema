import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/brandname.jpg";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        data-bs-theme="dark"
        sticky="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container className="container-header">
          <Navbar.Brand>
            <img src={logo} alt="logo" className="logonoemie"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
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

export default ColorSchemesExample;