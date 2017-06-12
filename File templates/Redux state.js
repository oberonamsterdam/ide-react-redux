// @flow

// state def

#set($capName = ${StringUtils.capitalizeFirstLetter(${NAME})})
#set($propType = $capName + "State")
export type $propType = {
    
};

const defaultState: $propType = {
    
};

export type Action = null;

// actions


// reducer

export default (state: $propType = defaultState, action: Action) => {
    switch(action.type) {
        default:
            return state;
    }
};

// action creators
