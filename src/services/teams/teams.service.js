import { closeURL, requestHandlerError  } from '../../_helpers/axios-connection/axios';
import { REGISTER_TEAMS, SEARCH_ALL_TEAMS, SEARCH_TEAMS_COSTS_TYPE, SEARCH_TEAMS_COST_ALL, SEARCH_TEAMS_TYPE } from '../../utils/environments';

export const registerTeams = (data) => {

    return closeURL.post(REGISTER_TEAMS, { type: data.teamsSelected.type })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}

export const registerTeamsBonus = (type, data) => {
    return closeURL.put(`${REGISTER_TEAMS}/${type}`, { data })
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}


export const searchAllTeams = () => {
    return closeURL.get(SEARCH_ALL_TEAMS)
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}

export const searchCostsTeamsAll = () => {
    return closeURL.get(SEARCH_TEAMS_COST_ALL)
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}

export const searchCostsTeamsType = (type) => {
    return closeURL.get(`${SEARCH_TEAMS_COSTS_TYPE}/${type}`)
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}

export const searchTeamsType = () => {
    return closeURL.get(SEARCH_TEAMS_TYPE)
        .then((onValue) => {
            return Promise.resolve(onValue.data);
        })
        .catch((onError) => {
            return Promise.reject(requestHandlerError(onError.response));
        })
}