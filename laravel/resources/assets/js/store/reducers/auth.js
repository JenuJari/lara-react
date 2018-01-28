import HTTP from '../../utils/Http';
import {
    AUTH_CHECK,
    // AUTH_LOGIN,
    // AUTH_LOGOUT,
    // AUTH_REFRESH_TOKEN,
    // AUTH_RESET_PASSWORD,
} from '../action-types';

const user = {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null,
}

const initialState = {
    isAuthenticated: false,
};



const reducer = (state = initialState, { type, payload = null }) => {
    switch (type) {
        // case AUTH_REFRESH_TOKEN:
        // case AUTH_LOGIN:
        //     return login(state, payload);
        case AUTH_CHECK:
            return checkAuth(state);
        // case AUTH_LOGOUT:
        //     return logout(state);
        // case AUTH_RESET_PASSWORD:
        //     return resetPassword(state);
        default:
            return state;
    }
};



function checkAuth(state) {
    state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem('access_token')
    })

    if (state.isAuthenticated) {
        HTTP.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
    }

    return state;
}


export const getAuth = state => state.auth.isAuthenticated;

export default reducer;