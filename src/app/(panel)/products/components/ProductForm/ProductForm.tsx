import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button,Input, Textarea } from "@/components/ui";
import { productCtrl } from "@/api";
import { initialValues, validationSchema } from "./ProductForm.form";
import { ProductFormProps } from "./ProductForm.types";
import styles from "./ProductForm.module.scss";
import { toast } from "sonner";

export function ProductForm(props: ProductFormProps) {
    const { editProduct, onCloseForm, onReload } = props;
   

    const { handleSubmit, register } = useForm({
        defaultValues: initialValues(editProduct),
        resolver: zodResolver(validationSchema),
    });

    const onSubmit = async (values: z.infer<typeof validationSchema>) => {
        try {
            if (editProduct) {
               await productCtrl.update(editProduct.id, values);   
               toast.success("Producto editado correctamente");
            }else{
                await productCtrl.create(values);
                toast.success("Producto creado correctamente");
            }

            await onReload();
            onCloseForm();
        }catch (error) {
            console.error(error);
            toast.error("Error al crear el producto");
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
             {...register("name")}
             placeholder="Nombre del producto"
             className={styles.input}
            />

            <Textarea {...register("note")}
              placeholder="Escribe una nota sobre el producto"
              className={styles.input}
            />
            <Button type="submit" className={styles.btnSubmit}>
                {editProduct ? "Actualizar producto" : "Crear producto"}
            </Button>
        </form>
    );
}
