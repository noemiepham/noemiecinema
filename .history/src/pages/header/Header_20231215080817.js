import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/brandname.jpg";
import "./header.css";
import Nav from "react-bootstrap/Nav";

function ColorSchemesExample() {
  return (
    <Container fluid>
      <Navbar data-bs-theme="dark" sticky="top">
        <Container className="container-header">
          <Navbar.Brand>
            <img src={logo} alt="logo" className="logonoemie"></img>
          </Navbar.Brand>
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
        </Container>
      </Navbar>
    </Container>
  );
}

export default ColorSchemesExample;
