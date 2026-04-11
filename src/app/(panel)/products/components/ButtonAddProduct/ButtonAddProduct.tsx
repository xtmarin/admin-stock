"use client"


import { Button } from "@/components/ui";
import styles from "./ButtonAddProduct.module.scss"
import { Plus } from "lucide-react";
import { Modal } from "@/components/shared";
import { ProductForm } from "../ProductForm";
import { useState, useEffect } from "react"
import { ButtonAddProductProps } from "./ButtonAddProduct.types";


export function ButtonAddProduct(props: ButtonAddProductProps) {
  const { editProduct, setEditProduct, onReload } = props;
  const [openForm, setOpenForm] = useState(false);


  const onOpenForm = () =>{
   setEditProduct(undefined);
   setOpenForm(true);
  };
  const onCloseForm = () => {
    setEditProduct(undefined);
    setOpenForm(false);
  };

  useEffect(() => {
    if (editProduct) {
      setOpenForm(true);
    } 
  }, [editProduct]);

  return (
    <>
      <Button size="icon" className={styles.button} onClick={onOpenForm}><Plus /></Button>
      <Modal.Basic
        title={editProduct ? "Editar producto" : "Crear producto"}
        open={openForm}
        onClose={onCloseForm}
      >
        <ProductForm
          editProduct={editProduct}
          onCloseForm={onCloseForm}
          onReload={onReload}

        />



      </Modal.Basic>
    </>
  );
}
