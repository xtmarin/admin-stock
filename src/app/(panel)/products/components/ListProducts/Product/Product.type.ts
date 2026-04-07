import { ProductModel } from "@/models";
import { Dispatch, SetStateAction } from "react";

export type ProductProps = {
    product: ProductModel;
    setEditProducts: Dispatch<SetStateAction<ProductModel | undefined>>;
    setDeleteProducts: Dispatch<SetStateAction<ProductModel | undefined>>;
};