import types from "./types";
import * as axios from "../_api/index.js";

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
        
        dispatch({ type: types.LOGIN_USER, data, isLogin: true })

        history.push("/");
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {       
        const { data } = await axios.signUp(formData);
        
        history.push("/login");
    } catch (error) {
        console.log(error);
    }
}