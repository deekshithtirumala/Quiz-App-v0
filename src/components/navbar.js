import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

function Navigation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand>Quizie</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-content" />
        <Navbar.Offcanvas placement="start" id="nav-content">
          <Offcanvas.Header closeButton className="justify-content-end" />
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link active href="">
                Quiz
              </Nav.Link>
              <Nav.Link href="">Login</Nav.Link>
              <Nav.Link href="">Sign Up</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
