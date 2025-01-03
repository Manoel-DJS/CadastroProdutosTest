import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/add")}>Cadastrar Novo Produto</button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
