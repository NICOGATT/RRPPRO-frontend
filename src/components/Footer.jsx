import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import rpmLogo from "../assets/rpmLogo.png";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-5">
        <Container>
            <Row>
                <Col md={4}>
                    <img src={rpmLogo} alt="RPM" width={180} className="mb-3" />
                    <p>
                        Fábrica argentina de ropa para mascotas con 17 años de
                        trayectoria.
                    </p>
                </Col>
                <Col md={4}>
                    <h5>Links rapidos</h5>
                    <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="footer-link">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos" className="footer-link">
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactos" className="footer-link">
                            Contactos
                        </Link>
                    </li>
                    </ul>
                </Col>
                <Col md={4}>
                    <h5>Contact</h5>
                    <p>Whatsapp Mayorista</p>
                    <a 
                        href="https://wa.me/5491140869806"
                        target="_blank"
                        className="text-decoration-none text-light"
                    >
                        +54 9 11 4086 9806
                    </a>
                    <div className="mt-4">
                        <p className="mb-1">Instagram</p>
                        <p className="mb-1">Facebook</p>
                        <p className="mb-1">Tik Tok</p>
                    </div>
                </Col>
            </Row>
            <hr />
            <p className="text-center mb-0">
                © 2026 RPM - Ropa para Mascotas
            </p>
        </Container>
        </footer>
    );
}

export default Footer;
