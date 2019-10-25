import { closeURL, requestHandlerError } from '../../_helpers/axios-connection/axios';
import { SEARCH_COMPANY_LEADER_ID, REGISTER_COMPANY } from '../../utils/environments';

export const registerCompany = ( name, motivo, missao, vision, valores, logo ) => {
    debugger
    return closeURL.post(REGISTER_COMPANY, { name, justificative: motivo, compMission: missao, compVision: vision, compValue: valores, logoUrl: logo })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            debugger
            return Promise.reject(requestHandlerError(onError.response));
        })
}

export const searchCompanyByIdLeader = (id) => {
    debugger
    return  closeURL.get(`${SEARCH_COMPANY_LEADER_ID}/${id}`)
    .then((onValue) => {
        return Promise.resolve(onValue.data);
    })
    .catch((onError) => {
        return Promise.reject(requestHandlerError(onError.response));
    })
}