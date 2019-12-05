import { closeURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { REGISTER_LIDER } from '../../utils/environments';


export const registerLider = (username, name, email, password) => {
    return closeURL.post(REGISTER_LIDER, { login: username, name, email, password })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}