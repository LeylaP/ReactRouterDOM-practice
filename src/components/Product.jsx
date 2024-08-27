import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const { id, name, price } = product;

  const navigation = useNavigate();

  return (
    <div style={{ marginBottom: "40px", backgroundColor: "orange" }}>
      <div> kÜrün Detayı</div>
      <h3>İsim:{name}</h3>
      <h3>Fiyatı: {price}</h3>
      <button onClick={() => navigation("/product-detail/" + id)}>
        Detaylı Bilgi
      </button>
    </div>
  );
}
