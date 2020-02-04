import { MENSAGEM_NETWORK, MENSAGEM_TIMEOUT, MENSAGEM_ERRO, BASEURL, MENSAGEM_UNAUTHORIZED, MENSAGEM_NOT_FOUND } from '../../utils/environments'
import axios from 'axios';
import * as _ from 'lodash';
import { isObject } from 'util';

export const openURL = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
});

export const closeURL = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
 
});

closeURL.interceptors.request.use(
  async (config) => {
    config.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('USER_TOKEN'))}`;
    return config;
  },
  error => { Promise.reject(error) }
);


export const requestHandlerError = (error) => {
    console.log(error)
    const { data } = error;

    let errMsg ="";
    
    if(_.isEqual(error.status, 401)) { return data ? data.message ? data.message : data : MENSAGEM_UNAUTHORIZED }
    if(_.isEqual(error.status, 404)) { return MENSAGEM_NOT_FOUND    }
    if(_.isEqual(error.status, 500)) { return MENSAGEM_ERRO         }
    else {return error.status}

    
    return data ? errMsg = data.error ? data.error : data : errMsg = MENSAGEM_ERRO
}