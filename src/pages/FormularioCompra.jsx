import React, { useState } from "react";
import style from "./formulario.module.css";
import { Col, Row, Card, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

function FormularioCompra({ carrito, eliminarProducto }) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const total = carrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0,
    );
    return (
        <div>
        <h2 className={style.title}>Formulario de compra</h2>
        <Container>
            <Row>
            <Col>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Indique su nombre de titular"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>DNI</Form.Label>
                    <Form.Control type="text" placeholder="Indique su dni aca" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Numero de tarjeta</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Indique su numero de tarjeta aca"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check vtype="checkbox" label="Aceptar los terminos y condiciones" />
                </Form.Group>
                </Form>
            </Col>
            <Col>
                <h2>Detalle de compra</h2>
                <Modal
                show={mostrarModal}
                onHide={() => setMostrarModal(false)}
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>🎉 Compra realizada</Modal.Title>
                </Modal.Header>

                <Modal.Body className="text-center">
                    <p className="mb-1">¡Gracias por tu compra!</p>
                    <p className="text-muted mb-0">
                    Tu pedido fue procesado correctamente
                    </p>
                </Modal.Body>

                <Modal.Footer className="justify-content-center">
                    {carrito.map((producto) => (
                            <Button
                                variant="success"
                                onClick={() => {
                                    setMostrarModal(false); 
                                    eliminarProducto(producto.id)
                                }}
                            >
                            Aceptar
                        </Button>
                    ))}
                </Modal.Footer>
                </Modal>
                {carrito.length == 0 ? (
                <div className="text-center mt-5">
                    <h4 className="text-muted">El carrito esta vacio</h4>
                    <p className="text-muted">
                    Agrega productos para finalizar su compra
                    </p>
                </div>
                ) : (
                    <>
                        {carrito.map((producto) => (
                            <Card key={producto.id}>
                            <Card.Body>
                                <Container>
                                <Row className="text-center fw-bold border-bottom pb-2">
                                    <Col md={3}>Nombre</Col>
                                    <Col md={2}>ID</Col>
                                    <Col md={2}>Cant.</Col>
                                    <Col md={2}>Subt.</Col>
                                    <Col md={2}>Total</Col>
                                    {/* <Col md={1}>Accion</Col> */}
                                </Row>

                                <Row className="text-center align-items-center pt-3">
                                    <Col md={3}>
                                    <Card.Title>{producto.nombre}</Card.Title>
                                    </Col>

                                    <Col md={2}>
                                    <Card.Text>{producto.id}</Card.Text>
                                    </Col>

                                    <Col md={2}>
                                    <Card.Text>{producto.cantidad}</Card.Text>
                                    </Col>

                                    <Col md={2}>
                                    <Card.Text>${producto.precio}</Card.Text>
                                    </Col>

                                    <Col md={2}>
                                    <Card.Text>
                                        ${producto.precio * producto.cantidad}
                                    </Card.Text>
                                    </Col>
                                    <Col md={1}>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        className="rounded-circle"
                                        onClick={() => eliminarProducto(producto.id)}
                                    >
                                        <i class="bi bi-trash"></i>
                                    </Button>
                                    </Col>
                                </Row>
                                </Container>
                            </Card.Body>
                            </Card>
                        ))}
                    <div className="text-center mt-4">
                    <Button
                        variant="primary"
                        onClick={() => setMostrarModal(true)}
                    >
                        Finalizar compra
                    </Button>
                    </div>
                    </>
                )}
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default FormularioCompra;
