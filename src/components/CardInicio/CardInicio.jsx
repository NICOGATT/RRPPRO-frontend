import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './card.module.css'
import { Link } from 'react-router-dom';
function CardInicio() {
  return (
    <div>
        <Card className='m-4 shadow'>
            <Row className='g-0'>
                <Col md={8}>
                    <Card.Body className="d-flex flex-column justify-content-center h-100">
                        <Card.Title className="text-body">Bienvenidos a RPM(Ropa para mascotas)</Card.Title>
                        <Card.Text className={`${styles.description} text-body`}>
                            Fábrica de diseño de ropa para mascotas con 17 años de trayectoria. Creamos 
                            prendas con identidad propia, pensadas para vestir perros, de todos los talles, 
                            razas y estilos
                        </Card.Text>
                        <Card.Text className={`${styles.description} text-body`}>
                            Diseños originales, excelente calce y colecciones que rotan durante todo el año.
                        </Card.Text>
                        <Button as={Link} to='/productos' variant="danger" className="px-5 py-2 align-self-center">Ver catalogo de productos</Button>
                    </Card.Body>
                </Col>

                <Col md={4}>
                    <Card.Img variant="top" src='/img/laRural1.jpg' alt='Imagen de evento' className="h-100 object-fit-cover" />
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default CardInicio