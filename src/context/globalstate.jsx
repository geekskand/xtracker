import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer"; // Ensure this file exists and is correctly implemented

const initialState = {
    transactions: [  // Changed "transaction" to "transactions" for clarity
        { id: 1, item: "Book", amount: 23, date: "2025-03-06" }
        
    ]
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {  // Fixed "GloablProvider" typo & "Children"
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, dispatch }}>
            {children}  {/* Fixed children rendering */}
        </GlobalContext.Provider>
    );
};
