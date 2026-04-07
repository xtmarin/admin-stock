import { TableCell, TableRow } from "@/components/ui";
import { ProductProps } from "./Product.type";
import styles from "./Product.module.scss";

export default function Product(props: ProductProps) {
  const { product, setEditProducts, setDeleteProducts } = props;

  return (
    <TableRow>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.note}</TableCell>

        
        <TableCell className={styles.actions}>Actions</TableCell> 

    </TableRow>
  );
}
