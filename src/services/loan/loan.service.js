import { closeURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { SEARCH_ALL_LOANS, SEARCH_LOAN, SEARCH_MAX_VALUE_LOAN, REGISTER_NEW_LOAN } from '../../utils/environments';


export const searchAllLoans = () => {
    return closeURL.get(SEARCH_ALL_LOANS)
        .then((onValue)  => { return Promise.resolve(onValue.data);                         })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })

}

export const searchMaxValueLoan = async () => {
    return await closeURL.get(SEARCH_MAX_VALUE_LOAN)
        .then((onValue) => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}

export const searchLoan = () => {
    return closeURL.get(SEARCH_LOAN)
        .then((onValue)  => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}

export const registerNewLoan = (totalValue) => {
    return closeURL.post( REGISTER_NEW_LOAN, { totalValue })
        .then((onValue)  => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}