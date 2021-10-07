import types from "./types";
import * as axios from "../_api/index.js";

// export function login(){
//     return {
//         type: types.LOGIN_USER,
//         isLogin: true
//     }
// }

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: types.LOGOUT_USER, isLogin: false })
    } catch (error) {
        console.log(error);
    }
}

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await axios.logIn(formData);
        
        // console.log(data);

        dispatch({ type: types.LOGIN_USER, data, isLogin: true })

        history.push("/");
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.signUp(formData);

        // console.log(data);
        // dispatch({ })
    } catch (error) {
        console.log(error);
    }
}