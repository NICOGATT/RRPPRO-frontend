import { Card, Button } from "react-bootstrap";

function CarritoItem({ producto,eliminarProducto, aumentarCantidad, disminuirCantidad }) {
  return (
    <div>
      <Card className="shadow-lg h-100">
        <Card.Body>
      <h4>{producto.nombre}</h4>

      <img src={producto.imagenes[0]} alt={producto.nombre} 
      style={{width: "100px",height: "100px",
        objectFit: "cover",borderRadius: "8px" }}/>
      <p></p>
      
      <Button  variant="primary" size="sm" onClick={() => aumentarCantidad(producto.id)} 
      style={{ cursor: producto.stock <= producto.cantidad ? "not-allowed" : "pointer" }}
      disabled={producto.stock <= producto.cantidad}> <i className="bi bi-plus"></i> </Button>

      <span className="mx-2">{producto.cantidad}</span>

      <Button variant="primary" size="sm" onClick={() => disminuirCantidad(producto.id) } 
      disabled={producto.cantidad === 1}> <i className="bi bi-dash"></i></Button>

      <p>Precio por unidad: ${producto.precio}</p>
      
      <p>Subtotal: ${producto.precio * producto.cantidad}</p>

      <Button variant="outline-danger" size="sm" onClick={()=> eliminarProducto(producto.id)}> <i className="bi bi-trash"></i></Button>

      
      </Card.Body>
      </Card>
    </div>

  );
}

export default CarritoItem;