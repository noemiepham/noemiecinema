import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/brandname.jpg";
import "./header.css";
import Nav from "react-bootstrap/Nav";

function ColorSchemesExample() {
  return (
    <>
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

export default ColorSchemesExample;
