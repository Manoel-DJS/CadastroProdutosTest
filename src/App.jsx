import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import './styles/App.css';

const App = () => (
  <ProductProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  </ProductProvider>
);

export default App;
