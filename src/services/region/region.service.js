import {
  closeURL,
  openURL,
  requestHandlerError
} from "../../_helpers/axios-connection/axios";
import { REGISTER_COMP_REGION, SEARCH_REGION } from "../../utils/environments";

export const setRegion = idRegion => {
  return closeURL
    .post(`${REGISTER_COMP_REGION}/${idRegion}`)
    .then(onValue => {
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      console.log(onError);
      return Promise.reject(requestHandlerError(onError.response));
    });
};

export const searchRegion = idRegion => {
  return closeURL
    .get(`${SEARCH_REGION}${idRegion}`)
    .then(onValue => {
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      console.log(onError);
      return Promise.reject(requestHandlerError(onError.response));
    });
};
