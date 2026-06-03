import CarritoItem from "../components/CarritoItem";
import { useState } from "react";
import { Modal, Button, Col, Row, Card } from "react-bootstrap";

function Carrito({ carrito,eliminarProducto, aumentarCantidad, disminuirCantidad, totalProductos}) { 

    const [mostrarModal, setMostrarModal] = useState(false);

    const totalDinero = carrito.reduce((acumulado, producto) =>
         acumulado + producto.precio * producto.cantidad,0);

  return (
    <div className="container my-5">
      <h2>Carrito de compras</h2>   

    <Modal show={mostrarModal} onHide={() => setMostrarModal(false)} centered>

        <Modal.Header closeButton>
          <Modal.Title>🎉 Compra realizada</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          <p className="mb-1">¡Gracias por tu compra!</p>
          <p className="text-muted mb-0">Tu pedido fue procesado correctamente</p>
        </Modal.Body>

        <Modal.Footer className="justify-content-center">
            <Button variant="success" onClick={() => setMostrarModal(false)}>Aceptar</Button>
        </Modal.Footer>
    </Modal>



      {carrito.length === 0 ? (
        <div className="text-center mt-5">
        <h4 className="text-muted">El carrito está vacío.</h4>
      <p className="text-secondary">Agregá productos para comenzar tu compra</p>
      </div>
  ) : (
        <>
        <Row className="g-3">
        {carrito.map(producto => (
          <Col key={producto.id} md={4}>
          <CarritoItem producto={producto} 
          eliminarProducto={eliminarProducto} aumentarCantidad={aumentarCantidad}
           disminuirCantidad={disminuirCantidad}/>  
           </Col>))}
           </Row>
           </>
          )}
        
      

{carrito.length !== 0 && (<Card className="mt-4 shadow">
  <Card.Body>
  
  <h3 >Productos: {totalProductos}</h3>
  
  <h3>Total a pagar: ${totalDinero.toLocaleString("es-AR")}</h3>

  <Button variant="success" disabled={carrito.length === 0} onClick={() =>  setMostrarModal(true)}> Confirmar compra </Button>
</Card.Body>
</Card>)}
    
    </div>
  );
}

export default Carrito;