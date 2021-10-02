import types from "./types";
import * as axios from "../_api/index.js";

// export function login(){
//     return {
//         type: types.LOGIN_USER,
//         isLogin: true
//     }
// }

// export function logout() {
//     return {
//         type: types.LOGOUT_USER,
//         isLogin: false
//     }
// }

export const login = (formData) => {
    const { data } = axios.logIn(formData);
}

