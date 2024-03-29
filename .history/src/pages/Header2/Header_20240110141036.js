import { Form, Button, NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/brandname.jpg";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import doSearch from "../../redux/search.action";

const Header = () => {
  const [searchkey, setSearchKey] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    const payload = {
      searchKey: searchkey,
      page: page,
      language: "en-EN",
    };
    dispatch(doSearch(payload));
    navigate("search", { replace: true });
  };
  console.log(setPage(page));
  return (
    <div>
      <Navbar
        sticky="top"
        fixed="top"
        key="lg"
        expand="lg"
        className="container-header"
      >
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
                <Nav.Link href="/tvshows">TV Shows</Nav.Link>
                <Nav.Link href="/people">People</Nav.Link>
                <Nav.Link href="/allfilms">All</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={searchkey}
                  onChange={(event) => setSearchKey(event.target.value)}
                />
                <Button variant="outline-success" onClick={handleSearch}>
                  Search
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
