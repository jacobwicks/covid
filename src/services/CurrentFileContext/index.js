import React, { createContext, useReducer } from 'react';

//the reducer handles actions
export const reducer = (state, action) => {
    //switch statement looks at the action type
    //if there is a case that matches the type it will run that code
    //otherwise it will run the default case
    switch (action.type) {
        case 'setCurrentFile': {
            //get the question from the action
            const { currentFile } = action;
            console.log(`setting current file`, currentFile);
            return {
                ...state,
                currentFile,
            };
        }
        //default case returns the previous state without changing it
        default:
            return state;
    }
};

//the object that we use to make the first Context
export const initialState = {
    currentFile: undefined,
};

const CurrentFileContext = createContext(initialState);

const CurrentFileProvider = ({ children, testState }) => {
    const [state, dispatch] = useReducer(
        reducer,
        testState ? testState : initialState
    );

    const value = { ...state, dispatch };

    return (
        <CurrentFileContext.Provider value={value}>
            {children}
        </CurrentFileContext.Provider>
    );
};

export { CurrentFileContext, CurrentFileProvider };
