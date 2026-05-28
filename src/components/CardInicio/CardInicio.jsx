import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import laRural1 from '/public/img/laRural1.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './card.module.css'
function CardInicio() {
  return (
    <div>
        <Card bg="dark" className='m-4 shadow'>
            <Row className='g-o'>
                <Col md={8}>
                    <Card.Body className="d-flex flex-column justify-content-center h-100">
                        <Card.Title className={styles.titulo}>Bienvenidos a RPM(Ropa para mascotas)</Card.Title>
                        <Card.Text className={styles.description}>
                            Fábrica de diseño de ropa para mascotas con 17 años de trayectoria. Creamos 
                            prendas con identidad propia, pensadas para vestir perros, de todos los talles, 
                            razas y estilos
                        </Card.Text>
                        <Card.Text className={styles.description}>
                            Diseños originales, excelente calce y colecciones que rotan durante todo el año.
                        </Card.Text>
                        <Button variant="danger" className="px-5 py-2 align-self-center">Ver catalogo de productos</Button>
                    </Card.Body>
                </Col>

                <Col md={4}>
                    <Card.Img variant="top" src={laRural1} alt='Imagen de evento' className="h-100 object-fit-cover" />
                </Col>
            </Row>
        </Card>
    </div>
  )
}

export default CardInicio