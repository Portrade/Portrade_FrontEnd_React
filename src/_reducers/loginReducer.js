import types from "../_actions/types";

const defaultLoginValue = {
    isLogin: false
}

const loginReducer = (state = { authData: null, isLogin: false }, action) => {
    switch(action.type){
        case types.LOGIN_USER: // { type: types.LOGIN_USER, isLogin: true }
            console.log("------LOGIN-----");
            
            localStorage.setItem('webToken', JSON.stringify({ ...action?.data }));

            return state = {
                ...state,
                authData: action?.data,
                isLogin: action.isLogin
            }
        case types.LOGOUT_USER:
            console.log("-----LOGOUT-----");

            localStorage.clear();

            return state = {
                ...state,
                authData: null,
                isLogin: action.isLogin
            }
        default:
            return state;
    }
}

export default loginReducer;
