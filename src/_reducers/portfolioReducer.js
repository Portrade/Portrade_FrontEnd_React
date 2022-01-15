import types from "../_actions/types";

const portfolioReducer = (state = { file: null }, action) => {
    switch(action.type){
		case types.PORTFOLIO_REGISTER:
			// console.warn("------PORTFOLIO_REGISTER-----\n" + action?.data);
			// console.warn(action?.data);
			return state = { ...state, file: action?.data }
		
        default:
            return state;
    }
}

export default portfolioReducer;
