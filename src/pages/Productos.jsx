import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import productosData from '../data/productos.json';
import ProductoCard from '../components/ProductoCard';

function Productos() {
  const [listaProductos, setListaProductos] = useState(productosData);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [ordenPrecio, setOrdenPrecio] = useState(null);
  const categoriasUnicas = ['Todas', ...new Set(productosData.map(producto => producto.categoria))];
  
  useEffect(() =>{
    if (categoriaActiva === 'Todas') {
      setListaProductos(productosData);
    } else {
      const productosFiltrados =productosData.filter( producto => producto.categoria === categoriaActiva);
      setListaProductos(productosFiltrados);
    }
  }, [categoriaActiva]);
  
  
  const manejarOrdenPrecio = () => {
    const nuevoOrden = ordenPrecio === 'asc' ? 'desc' : 'asc';
    setOrdenPrecio(nuevoOrden);
    const productosOrdenados = [...listaProductos];
    if (nuevoOrden === 'asc') {
      productosOrdenados.sort((a,b) => a.precio - b.precio);
    } else {
      productosOrdenados.sort((a,b)=> b.precio - a.precio);
    }
    setListaProductos(productosOrdenados);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-center">Nuestro Catálogo</h2>
      
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {categoriasUnicas.map((categoria, index) => (
          <Button
            key={index}
            variant={categoriaActiva === categoria ? "primary" : "outline-primary"}
            onClick ={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </Button>
        ))}
      </div>
      <div 
        className="d-flex justify-content-end align-items-center mb-3"
        style={{ minHeight: '40px' }}
      >
        <Button
          variant="light"
          size="sm"
          className="border-0 text-secondary fw-bold"
          onClick={manejarOrdenPrecio}
        >
        Ordenar Precio {ordenPrecio === 'asc' ? (<i className="bi bi-sort-numeric-up ms-2"></i>
        ) : (<i className="bi bi-sort-numeric-down-alt ms-2"></i>
        )}

      </Button>
      </div>
      
      <Row className="g-4">
        {listaProductos.map((producto) => (
          <Col key={producto.id} xs={12} sm={6} md={4} lg={3}>
            <ProductoCard producto={producto} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Productos;