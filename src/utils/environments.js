export const BASEURL            = 'https://companytrial-backend-beta.herokuapp.com';
export const LOGIN              = '/login';

//registers
export const REGISTER_ADMIN     = '/users/new-admin';
export const REGISTER_TEACHER   = '/users/new-member';
export const REGISTER_LIDER     = '/users/new-leader';
export const REGISTER_MEMBER    = '/users/new-member';
export const REGISTER_COMPANY   = '/companies/new';
export const REGISTER_NEW_LOAN  = '/loan/new';


//search
export const SEARCH_ALL                 = '/users/all';
export const SEARCH_BY_USERNAME         = '/users/login';
export const SEARCH_STUDENTS            = '/users/students';
export const SEARCH_TEACHERS            = '/users/teachers';
export const SEARCH_COMPANY_LEADER_ID   = '/companies/leader';
export const SEARCH_ALL_LOANS           = '/loan/all';
export const SEARCH_MAX_VALUE_LOAN      = '/loan/max';
export const SEARCH_LOAN                = '/loan/options';


//list
export const LIST_ALL_MEMBERS_COMPANY   = '/companies/company-members';
export const LIST_ALL_PRODUCTS          = '/products/all';
 

//delete
export const DELETE_USER                = '/users/delete';



//default messages
export const MENSAGEM_ERRO          = `Erro inesperado do servidor, por favor tente mais tarde.`;
export const MENSAGEM_TIMEOUT       = `Tempo de espera esgotado. Tente novamente em alguns instantes.`;
export const MENSAGEM_NETWORK       = `Não possui conexão ou estamos offline, por favor tente mais tarde.`;
export const MENSAGEM_NOT_FOUND     = `Á página que está tentando acessar não encontrada.`;
export const MENSAGEM_UNAUTHORIZED  = `Você não tem permissão para realizar este acesso.`;