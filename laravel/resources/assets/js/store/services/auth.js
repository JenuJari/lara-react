import Http from "../../utils/Http";
import { authActions } from "../actions";
import Transformer from "../../utils/Transformer";


export const register = (cred) => {
    return dispatch => new Promise((resolve, reject) => {
        Http.post("/api/auth/register", cred)
          .then(res => {
            const data = Transformer.fetch(res.data);
            dispatch(authActions.authLogin(data.accessToken));
            return resolve();
          })
          .catch(err => {
            const statusCode = err.response.status;
            const data = { error: null, statusCode };

            if (statusCode === 422) {
              const resetErrors = { errors: err.response.data, replace: false, searchStr: "", replaceStr: "" };
              data.error = Transformer.resetValidationFields(resetErrors);
            } else if (statusCode === 401) {
              data.error = err.response.data.message;
            }
            return reject(data);
          });
    });
}