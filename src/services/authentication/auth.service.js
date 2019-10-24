import { setUserLocalStorage, setTokenLocalStorage } from '../../_helpers/localstorage/LocalStorage';
import { openURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { LOGIN } from '../../utils/environments';
import { findUserByUsername } from '../user/user.service';

export const realizarAuthenticacao = (username, password) => {
    return openURL.post(LOGIN, { login: username, password })
        .then(async (onValue) => {
            setTokenLocalStorage(onValue.data.token)
            return findUserByUsername(username)
                .then((onResponseFindUser) => {
                    setUserLocalStorage(onResponseFindUser);
                    return Promise.resolve(onResponseFindUser);
                })
                .catch((onErrorFindUser) => {
                    return Promise.reject(requestHandlerError(onErrorFindUser.response));
                }) 
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        });
};