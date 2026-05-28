import React from 'react'
import Container from "react-bootstrap/Container";
function Descripcion() {
  return (
    <section className='py-5 bg-light'>
        <Container>
            <h2 className='text-center mb-4'>
                Sobre RPM
            </h2>
            <p className='lead text-center'>
                RPM es una fabrica de diseño de ropa para mascotas con 17 años de trayectoria.
            </p>
            <p className='text-center'>
                A lo largo de estos años hemos desarrollado colecciones completas para invierno, 
                verano y navidad, trabajando con distintos talles, texturas, y diseños pensados
                para mascotas de todas las razas
            </p>
            <p className='text-center'>
                Nuestras prendas se destacan por su excelente rotacion comercial, calidad, premium y 
                diseños originales que buscan diferenciar a cada mascota.
            </p>
        </Container>
    </section>
  )
}

export default Descripcion