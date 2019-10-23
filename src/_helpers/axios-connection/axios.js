import { MENSAGEM_NETWORK, MENSAGEM_TIMEOUT, MENSAGEM_ERRO, BASEURL, MENSAGEM_UNAUTHORIZED, MENSAGEM_NOT_FOUND } from '../../utils/environments'
import axios from 'axios';
import * as _ from 'lodash';
import { isObject } from 'util';

export const openURL = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
  headers: {
          "Access-Control-Allow-Origin": "*",
        }
});

export const closeURL = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
});

closeURL.interceptors.request.use(
  async (config) => {
    config.headers.authorization = JSON.parse(localStorage.getItem('USER_TOKEN'));
    return config;
  },
  error => { Promise.reject(error) }
);


export const requestHandlerError = (error) => {

    const { data } = error;

    if(_.isEqual(error.status, 401)) { return data ? data.error ? data.error : data : MENSAGEM_UNAUTHORIZED }
    if(_.isEqual(error.status, 404)) { return MENSAGEM_NOT_FOUND    }
    if(_.isEqual(error.status, 500)) { return MENSAGEM_ERRO         }

    
    return data ? errMsg = data.error ? data.error : data : errMsg = MENSAGEM_ERRO
}