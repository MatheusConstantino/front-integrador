import {
  closeURL,
  requestHandlerError
} from "../../_helpers/axios-connection/axios";
import {
  REGISTER_BASE_RADIO,
  SEARCH_BASE_RADIO_STATION,
  DELETE_BASE_RADIO_STATION
} from "../../utils/environments";

export const registerBaseRadioStation = () => {
  return closeURL
    .post(REGISTER_BASE_RADIO)
    .then(onValue => {
      console.log(onValue);
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      return Promise.reject(requestHandlerError(onError.response));
    });
};

export const listBaseRadioStation = () => {
  return closeURL
    .get(SEARCH_BASE_RADIO_STATION)
    .then(onValue => {
      return onValue.data;
    })
    .catch(onError => {
      return Promise.reject(requestHandlerError(onError.response));
    });
};

export const deleteBaseRadioStation = id => {
  return closeURL
    .delete(`${DELETE_BASE_RADIO_STATION}/${id}`)
    .then(onValue => {
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      return Promise.reject(requestHandlerError(onError.response));
    });
};
