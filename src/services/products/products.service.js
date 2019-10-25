import { LIST_ALL_PRODUCTS } from "../../utils/environments";
import { requestHandlerError, closeURL } from "../../_helpers/axios-connection/axios";


export const listAllProducts = () => {
    return  closeURL.get(`${LIST_ALL_PRODUCTS}`)
    .then((onValue) => {
        debugger
        return Promise.resolve(onValue.data);
    })
    .catch((onError) => {
        return Promise.reject(requestHandlerError(onError.response));
    })
}