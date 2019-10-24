import { closeURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { REGISTER_LIDER } from '../../utils/environments';


export const registerLider = (username, name, email, password) => {
    return closeURL.post(REGISTER_LIDER, { login: username, name, email, password })
        .then((onValue) => {
            debugger
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            debugger
            return Promise.reject(requestHandlerError(onError.response));
        })
}