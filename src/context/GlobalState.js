import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions: [
        { id: 1, text: "flower", amount: -20 },
        { id: 2, text: "game", amount: -60 },
        { id: 3, text: "salary", amount: 2000 },
        { id: 4, text: "food", amount: -20 },
        { id: 5, text: "mac", amount: -2000 },
    ]
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    };
    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
