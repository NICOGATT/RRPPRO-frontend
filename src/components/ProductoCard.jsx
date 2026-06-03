import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductoCard = ({producto, agregarAlCarrito, carrito}) => {
    const { id, nombre, precio, stock, imagenes, categoria } = producto;

    const sinStock = stock === 0;

    const enCarrito = carrito.find(item => item.id === producto.id);
    
    const maxAlcanzado = enCarrito?.cantidad >= producto.stock;

    
    return (
        <Card className='h100 shadow-sm'>
            <div style={{ position: 'relative' }}>
                <Card.Img 
                    variant="top" 
                    src={imagenes[0]} 
                    alt={`Imagen de ${nombre}`} 
                    style={{ objectFit: 'cover', height: '250px' }}
                />
        
                {sinStock && (
                    <Badge bg="danger" style={{position: 'absolute', top: '10px', right: '10px'}}>Sin stock 
                    </Badge>
                )} 
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Subtitle className="mb-2 text-muted">{categoria}</Card.Subtitle>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text className="fs-5 fw-bold mt-auto">${precio.toLocaleString('es-AR')}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-3 gap-2">
                    <Link to={`/producto/${id}`}>
                        <Button variant="outline-primary" size="sm">+ info
                        </Button>
                    </Link>
                    <Button
                        variant={sinStock ? "secondary" : "success"}
                        size="sm"
                        disabled={sinStock || maxAlcanzado}
                        onClick={() => agregarAlCarrito(producto)}>

                    Agregar al 🛒
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
    };

    export default ProductoCard;