import { closeURL, requestHandlerError } from "../../_helpers/axios-connection/axios"
import { SEARCH_BY_USERNAME, REGISTER_MEMBER } from "../../utils/environments";


export const registerMember = (username, name, email, password) => {
    return closeURL.post(REGISTER_MEMBER , { login: username, name, email, password })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            debugger
            return Promise.reject(requestHandlerError(onError.response));
        })
}

export const findUserByUsername = (username) => {
    debugger
    return closeURL.get(`${SEARCH_BY_USERNAME}/${username}`)
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            debugger
            return Promise.reject(requestHandlerError(onError.response));
        })
}