import { Dispatch, SetStateAction } from "react";
import { ProductModel } from "@/models";

export type ListProductsProps = {
    products: ProductModel[];
    setEditProducts: Dispatch<SetStateAction<ProductModel | null>>;
    onReload: () => void;
};