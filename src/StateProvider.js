import React,{createContext, useContext, useReducer} from 'react'

//prepares the data laye
export const StateContext=createContext();
//wraps the app and provide data layer
export const StateProvider = ({reducer, initialState, children}) =>{
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}
// pull info from the data layer 
export const useStateValue=(_)=> useContext(StateContext)
