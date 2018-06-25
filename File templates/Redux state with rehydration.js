// @flow
import { REHYDRATE } from 'redux-persist/constants';

// state def

#set($capName = ${StringUtils.capitalizeFirstLetter(${NAME})})
#set($propType = $capName + "State")
export type $propType = {
    
};

const defaultState: $propType = {
    
};

type RehydrationAction = {
    type: REHYDRATE,
    payload: $propType
};

export type Action = RehydrationAction;

// actions


// reducer

export default (state: $propType = defaultState, action: Action) => {
    switch(action.type) {
        case REHYDRATE:
            return {
                ...state
            };
        default:
            return state;
    }
};

// action creators
