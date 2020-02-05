import {
  closeURL,
  requestHandlerError
} from "../../_helpers/axios-connection/axios";
import {
  REGISTER_NEW_PA,
  LIST_ALL_PAS,
  DELETE_PA
} from "../../utils/environments";

export const registerPA = () => {
  return closeURL
    .post(REGISTER_NEW_PA)
    .then(onValue => {
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      return Promise.reject(requestHandlerError(onError.response));
    });
};

export const listPA = () => {
  return closeURL
    .get(LIST_ALL_PAS)
    .then(onValue => {
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      return Promise.reject(requestHandlerError(onError.response));
    });
};

export const deletePA = id => {
  return closeURL
    .delete(`${DELETE_PA}/${id}`)
    .then(onValue => {
      return Promise.resolve(onValue.data);
    })
    .catch(onError => {
      return Promise.reject(requestHandlerError(onError.response));
    });
};
