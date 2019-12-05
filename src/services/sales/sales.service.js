import { closeURL } from "../../_helpers/axios-connection/axios";
import { REGISTER_NEW_SALE } from "../../utils/environments";

export const registerNewSale = (quantidade, precoUnitario, idProductType) => {
    return closeURL.post(REGISTER_NEW_SALE, { qtt: quantidade, unitPrice: precoUnitario, productTyper: idProductType })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}