import React from "react";
import { ProductWarehouseCard } from "../../Components/Cards";
const products = [
  {
    id: 1,
    name: "Produkt",
    dimensions: "100x100",
    quantity: 50,
    category: {
      name: "Nóż",
    },
  },
];
const ShowProductWarehousePage = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductWarehouseCard id={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShowProductWarehousePage;
