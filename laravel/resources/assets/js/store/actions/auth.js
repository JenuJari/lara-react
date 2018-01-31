
import { AUTH_CHECK, AUTH_LOGIN } from "../action-types";


export function authCheck() {
    return {
        type: AUTH_CHECK,
    }
}


export const authLogin = payload => { return { type: AUTH_LOGIN, payload };}
