import types from "./types";
import * as axios from "../_api/index.js";

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: types.LOGOUT_USER, isLogin: false });
    } catch (error) {
        console.log(error);
    }
};

export const login = (formData) => async (dispatch) => {
    try {
        console.log(formData.userId);
        const { data } = await axios.logIn(formData);

        dispatch({ type: types.LOGIN_USER, data: {data, userId: formData.userId}, isLogin: true });

        window.history.back(); //push("/");
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await axios.signUp(formData);

        window.history.push("/login");
    } catch (error) {
        console.log(error);
    }
};
