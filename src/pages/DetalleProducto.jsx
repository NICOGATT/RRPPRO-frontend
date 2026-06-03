import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import productosData from "../data/productos.json";

function DetalleProducto({ agregarAlCarrito, carrito}) {
  const { id } = useParams();

  const producto = productosData.find(
    p => p.id === Number(id)
  );

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const sinStock = producto.stock === 0;

  const enCarrito = carrito.find(item => item.id === producto.id);

  const maxAlcanzado = enCarrito?.cantidad >= producto.stock;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img
            src={producto.imagenes[0]}
            alt={producto.nombre}
            className="img-fluid rounded"
          />
        </Col>

        <Col md={6}>
          <h2>{producto.nombre}</h2>

          <Badge bg="secondary" className="mb-3">
            {producto.categoria}
          </Badge>

          <p>{producto.descripcion}</p>

          <h4>
            ${producto.precio.toLocaleString("es-AR")}
          </h4>

          <p>
            Stock disponible: {producto.stock}
          </p>

          {sinStock && (
            <Badge bg="danger">
              Sin stock
            </Badge>
          )}

          <div className="mt-4 d-flex gap-2">
            <Link to="/productos">
              <Button variant="outline-primary">
                Volver
              </Button>
            </Link>

            <Button variant="success" disabled={sinStock || maxAlcanzado}
              onClick={() => agregarAlCarrito(producto)} >
              Agregar al 🛒
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleProducto;