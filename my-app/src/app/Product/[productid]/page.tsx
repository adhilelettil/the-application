"use client"

import { productservieses } from "@/app/servieses/servieses";
import React, { useEffect, useState } from 'react';
import "./productdetail.css";

export default function Productdetail(props: any) {
  const [product, setProduct] = useState<{ image?: { url: string }[]; name?: string; price?: string; description?: { children?: { text: string }[] }[] }>({ image: [] });
  const [productId, setProductId] = useState<string | null>(null);

  console.log(product.description);
  useEffect(() => {
    async function fetchParams() {
      const params = await props.params;
      setProductId(params.productid);
    }
    fetchParams();
  }, [props.params]);

  useEffect(() => {
    async function fetchProduct() {
      if (productId) {
        try {
          const productData = await productservieses.getproductbyid(productId);
          setProduct(productData);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchProduct();
  }, [productId]);

  function addcart() {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...storedCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div style={{ display: 'flex' }}>
      <div className='image'>
        {product.image && product.image[0] && (
          <img src={product.image[0].url} style={{ height: "200px" }} alt={product.name} />
        )}
      </div>
      <div className='contents'>
      
        <div className='titl'><h1>{product.name}</h1></div><br />
        <div className='pric'><h1>{product.price}</h1></div>
        <div>
          <h3>
            {product.description && product.description[0]?.children?.[0]?.text
              ? product.description[0].children[0].text
              : "Description not available"}
          </h3>
          <h3>
            {product.description && product.description[1]?.children?.[0]?.text
              ? product.description[1].children[0].text
              : "Description not available"}
          </h3>
          <h3>
            {product.description && product.description[2]?.children?.[0]?.text
              ? product.description[2].children[0].text
              : "Description not available"}
          </h3>
        </div>
        <button className="btn btn-warning" style={{ marginTop: "10px" }} onClick={addcart}>Add to cart</button>
      </div>
    </div>
  );
}