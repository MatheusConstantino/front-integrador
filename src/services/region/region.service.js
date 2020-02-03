import { closeURL, openURL,requestHandlerError } from "../../_helpers/axios-connection/axios"
import { REGISTER_COMP_REGION } from "../../utils/environments";

export const setRegion = (idRegion) => {
    return closeURL.post(`${REGISTER_COMP_REGION}/${idRegion}`)
        .then((onValue) => {
            console.log(onValue)
            alert("setRegion foi")
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            console.log(onError)
            alert("2")
            return Promise.reject(requestHandlerError(onError.response));
        })
}