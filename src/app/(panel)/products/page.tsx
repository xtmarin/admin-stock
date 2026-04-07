"use client";

import { useEffect, useState } from "react";
import { productCtrl } from "@/api";
import { ProductModel } from "@/models";
import { Skeleton } from "@/components/shared";
import { ListProducts } from "./components";

export default function ProductPage() {
    const [products, setProducts] = useState<ProductModel[] | undefined>(undefined);
    console.log(products);
    useEffect(() => {
      getProducts();
    }, []);

    const getProducts = async () => {
      try {
        const response = await productCtrl.getAll();
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    if (!products) return <Skeleton.List />;



    return (
      <div>
          <ListProducts
           
            products={products}
          
          />
      </div>
    );
}

