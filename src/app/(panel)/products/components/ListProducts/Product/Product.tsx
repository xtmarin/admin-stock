import { ButtonAddProduct } from "../../ButtonAddProduct";
import { TableCell, TableRow, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui";
import { ProductProps } from "./Product.type";
import styles from "./Product.module.scss";
import { MoreHorizontal } from "lucide-react";

export default function Product(props: ProductProps) {
  const { product, setEditProduct, setDeleteProduct } = props;

  return (
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.note}</TableCell>

      <TableCell className={styles.actions}>
        <DropdownMenu>
          <DropdownMenuTrigger>

             <MoreHorizontal className={styles.btnOptions} />

          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setEditProduct(product)}>
              Editar 
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDeleteProduct(product)}>
              Eliminar 
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </TableCell>
    </TableRow>
  );
}