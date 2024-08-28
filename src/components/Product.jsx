import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const { id, name, price, image } = product;

  const navigation = useNavigate();

  return (
    <div class="box  p-4 rounded-2xl box-decoration-slice bg-gradient-to-r from-cyan-400 to-teal-500 ">
      <img src={image} style={{ width: "500px", height: "auto" }} />
      <div> Ürün Detayı</div>
      <h3 class="text-3xl font-bold ">İsim:{name}</h3>
      <h3>Fiyatı: {price}</h3>
      <button onClick={() => navigation("/product-detail/" + id)}>
        <span class="box-decoration-slice bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-2 p-1 rounded-xl">
          Detaylı bilgi
        </span>
      </button>
    </div>
  );
}
