import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import DetalleProducto from "./pages/DetalleProducto";
import ScrollToTop from "./components/ScrollToTop";
import FormularioCompra from "./pages/FormularioCompra";
import { Toast, ToastContainer, ToastHeader } from "react-bootstrap";
function App() {
  const [mostrarToast, setMostrarToast] = useState(false);
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("cart");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const temaGuardado = localStorage.getItem("temaOscuro");
    return temaGuardado === "true";
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
  }, [carrito]);

    const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const existe = carritoActual.find((item) => item.id === producto.id);

      if (existe) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
        }

      return [...carritoActual, { ...producto, cantidad: 1 }];
    });
    setMostrarToast(true);
  };

 
  useEffect(() => {
    localStorage.setItem("temaOscuro", temaOscuro);
    document.documentElement.setAttribute('data-bs-theme', temaOscuro ? 'dark' : 'light');
  }, [temaOscuro]);


   function vaciarCarrito(){
        setCarrito([])
    }

  const toggleTema = () => {
    setTemaOscuro(!temaOscuro);
  };
  
  const eliminarProducto = (id) => {
    setCarrito((carrito) => carrito.filter((producto) => producto.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCarrito(
      carrito.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              cantidad: producto.cantidad + 1,
            }
          : producto,
      ),
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(
      carrito.map((producto) => {
        if (producto.id !== id) return producto;

        return {
          ...producto,
          cantidad: producto.cantidad - 1,
        };
      }),
    );
  };

  const totalProductos = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0,
  );

  return (
    <>
      <ScrollToTop />

      <NavBar 
        totalProductos={totalProductos}
        temaOscuro={temaOscuro}
        toggleTema={toggleTema} 
      />
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route
          path="/productos"
          element={
            <Productos agregarAlCarrito={agregarAlCarrito} carrito={carrito} />
          }
        />

        <Route
          path="/producto/:id"
          element={
            <DetalleProducto
              agregarAlCarrito={agregarAlCarrito}
              carrito={carrito}
            />
          }
        />

        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              setCarrito={setCarrito}
              eliminarProducto={eliminarProducto}
              aumentarCantidad={aumentarCantidad}
              disminuirCantidad={disminuirCantidad}
              totalProductos={totalProductos}
            />
          }
        />

        <Route path="/contactos" element={<Contacto />} />
        <Route path="/formulario-compra" element={<FormularioCompra 
        carrito={carrito} eliminarProducto={eliminarProducto} vaciarCarrito={vaciarCarrito}/>}/>
      </Routes>
      <Footer />
      <ToastContainer position="top-end" className="p-3 mt-5" style={{ position: 'fixed', zIndex: 1050 }}>
        <Toast 
          show={mostrarToast} 
          onClose={() => setMostrarToast(false)} 
          autohide 
          delay={3000}
          bg="success" 
        >
          <ToastHeader />
          <Toast.Body className="text-white fw-bold">
            Producto agregado al carrito.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
