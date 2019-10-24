import { closeURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { REGISTER_LIDER } from '../../utils/environments';


export const registerLider = (name, email, password) => {
    return closeURL.post(REGISTER_LIDER, { name, email, password })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(error.response));
        })
}