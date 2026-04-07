import { map } from "lodash";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui";
import { ListProductsProps } from "./ListProducts.type";
import { Product } from "./Product";

export default function ListProducts(props: ListProductsProps) {
  const { products, setEditProducts, onReload } = props;

  console.log(products);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Nota</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {map(products, (product)=>(
          <Product
            key={product.id}
            product={product}

          />
        ))}
      </TableBody>


    </Table>

      
  );
}
