import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
//import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'
import Footer from './components/Footer'
import DetalleProducto from "./pages/DetalleProducto";
import ScrollToTop from './components/ScrollToTop'
function App() {
  //const [carrito, setCarrito] = useState([])

  return (
    <>
      <ScrollToTop />

      <NavBar/>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/productos" element={<Productos />} />

        <Route path="/producto/:id" element={<DetalleProducto />}/>

        {/*<Route path='/carrito' element={<Carrito carrito={carrito} setCarrito={setCarrito}/>}/>*/}

        <Route path="/contactos" element={<Contacto />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
