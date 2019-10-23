import { setUserLocalStorage, setTokenLocalStorage } from '../../_helpers/localstorage/LocalStorage';
import { openURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { LOGIN } from '../../utils/environments';

export const realizarAuthenticacao = (username, password) => {
    return openURL.post(LOGIN, { login: username, password })
        .then((onValue) => {
            setUserLocalStorage(onValue);
            setTokenLocalStorage(onValue.data.token)
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        });
};