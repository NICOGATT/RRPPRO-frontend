import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/rpmLogo.png';
import styles from './navbar.module.css'; 
import { Link, NavLink } from "react-router-dom";
function NavBar() {
    return (
        <Navbar data-bs-theme="dark" expand="lg" className={`${styles.navbar} shadow-sm`}>
            <Container fluid className="px-5">
                <Navbar.Brand as={Link} to="/" className={styles.brand}>
                    <img src={logo} className={styles.logo} alt="RPM" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <Nav.Link className={styles.navLink} as={NavLink} to="/">
                            Inicio
                        </Nav.Link>
                        <Nav.Link className={styles.navLink} as={NavLink} to="/productos">
                            Productos
                        </Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
