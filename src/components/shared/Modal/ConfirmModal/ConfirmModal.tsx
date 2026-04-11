import {useState, useEffect} from "react";
import { ConfirmModalProps } from "./ConfirmModal.types";
import styles from "./ConfirmModal.module.scss";
import { AlertDialog,AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui";

import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";


export function ConfirmModal(props: ConfirmModalProps) {
    const { title, description, open, onConfirm, onCancel, danger } = props;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (open) setLoading(false);
        }, [open]);

        const onConfirmAction = () =>{
            setLoading(true);
            onConfirm();
        };
    


    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    {description && (
                        <AlertDialogDescription>{description}</AlertDialogDescription>
                    )}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirmAction} className={cn(danger && styles.btnDanger)}>
                        {loading ? <LoaderCircle className={styles.Load} /> : "Continuar"}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>


        </AlertDialog>
    );
}
