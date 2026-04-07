import {ENV} from "@/utils"
import { ProductModel } from "@/models";

async function getAll(): Promise<ProductModel[]> {
    const url = `${ENV.API_URL}/products`;
    const response = await fetch(url);

    if (response.status !== 200)  throw response;

    return await response.json();
}

export const productCtrl = {
    getAll,
}