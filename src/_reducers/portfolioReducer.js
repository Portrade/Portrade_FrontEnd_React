import types from "../_actions/types";

const portfolioReducer = (state = { file: null }, action) => {
    switch(action.type){
		case types.PORTFOLIO_REGISTER:
			return state = { ...state, file: action?.data }		
        default:
            return state;
    }
}

export default portfolioReducer;
