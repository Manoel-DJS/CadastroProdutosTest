import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    available: "sim",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      ...formData,
      price: parseFloat(formData.price),
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome do produto:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Descrição do produto:
        <input type="text" name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <label>
        Valor do produto:
        <input type="number" name="price" value={formData.price} onChange={handleChange} step="0.01" required />
      </label>
      <label>
        Disponível para venda:
        <select name="available" value={formData.available} onChange={handleChange} required>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>
      </label>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProductForm;
