import React, { createContext, useState, useEffect } from "react";
import getState from "./flux.js";

// Create and export the context
export const AppContext = createContext({
    store: {
        products: [],
        categories: []
    },
    actions: {}
});

// Create the context provider component
export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        console.log("Initializing context state");
        const initialState = getState({
            getStore: () => state?.store,
            getActions: () => state?.actions,
            setStore: (updatedStore) => {
                console.log("Setting store:", updatedStore);
                setState(prevState => ({
                    ...prevState,
                    store: { ...prevState.store, ...updatedStore }
                }));
            }
        });
        console.log("Initial state:", initialState);
        return initialState;
    });


    useEffect(() => {
        const initializeApp = async () => {
            try {
                if (state?.actions?.getShoppingCart) {
                    await state.actions.getShoppingCart();
                }
            } catch (error) {
                console.error("Error initializing app:", error);
            }
        };

        initializeApp();
    }, [state?.actions]);

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
};

// HOC for legacy support
export const withContext = (Component) => {
    return function ContextWrapper(props) {
        return (
            <AppContextProvider>
                <Component {...props} />
            </AppContextProvider>
        );
    };
};
