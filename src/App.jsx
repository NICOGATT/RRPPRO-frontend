import './App.css'
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import DetalleProducto from "./pages/DetalleProducto";
import ScrollToTop from './components/ScrollToTop'
function App() {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find(item=> item.id === producto.id)
    
    if (existente) {
      if (existente.cantidad >= producto.stock) return;

      setCarrito(carrito.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1} : item));
    } else { 
      if(producto.stock === 0) return;

      setCarrito ([...carrito,{ ...producto, cantidad: 1}]);
  }
};

const eliminarProducto = (id) => {
  setCarrito(
    carrito.filter(producto => producto.id !== id)
  );
};

const aumentarCantidad = (id) => {
  setCarrito(
    carrito.map(producto =>
      producto.id === id
        ? {
            ...producto,
            cantidad: producto.cantidad + 1
          }
        : producto
    )
  );
};

const disminuirCantidad = (id) => {
  setCarrito(
    carrito.map(producto => {
      if (producto.id !== id) return producto;

      return {
        ...producto,
        cantidad: producto.cantidad - 1
      };
    })
  );
};


const totalProductos = carrito.reduce((total, producto) =>
         total + producto.cantidad,0);

  return (
    <>
      <ScrollToTop />

      <NavBar totalProductos={totalProductos} />
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} carrito={carrito}/>} />

        <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito}
        carrito={carrito}/>}/>

        <Route path='/carrito' element={<Carrito carrito={carrito} setCarrito={setCarrito}
         eliminarProducto={eliminarProducto} aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad} totalProductos={totalProductos}/>}/>

        <Route path="/contactos" element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
