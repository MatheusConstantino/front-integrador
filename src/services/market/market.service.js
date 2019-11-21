import { closeURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { MARKET_COTATION_DOLLAR, MARKET_COTATION_INFLATION, MARKET_LIMITS_MONTHLY, MARKET_LIMITS_YEARLY } from '../../utils/environments';

export const cotationDollar = () => {
    return closeURL.get(MARKET_COTATION_DOLLAR)
        .then((onValue) => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}


export const cotationInflation = () => {
    return closeURL.get(MARKET_COTATION_INFLATION)
        .then((onValue) => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}

export const limityMonthly = () => {
    return closeURL.get(MARKET_LIMITS_MONTHLY)
        .then((onValue) => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}

export const limitsYearly = () => {
    return closeURL.get(MARKET_LIMITS_YEARLY)
        .then((onValue) => { return Promise.resolve(onValue.data); })
        .catch((onError) => { return Promise.reject(requestHandlerError(onError.response)); })
}