import React, { createContext, useState, useEffect } from "react";
import getState from "./flux.js";

// Create and export the context
export const AppContext = createContext({
    store: {
        products: [],
        categories: [],
        cart: []  // Ensure cart is part of the initial state
    },
    actions: {}
});

// Create the context provider component
export const AppContextProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || []; // Get cart from localStorage

        const initialState = getState({
            getStore: () => ({ ...state.store, cart: JSON.parse(localStorage.getItem("cart")) || [] }), // Always return latest cart
            getActions: () => state?.actions,  // Return actions
            setStore: (updatedStore) => {
                setState(prevState => {
                    const newState = {
                        ...prevState,
                        store: { ...prevState.store, ...updatedStore }  // Update state with the new store
                    };

                    // If cart is updated, save it to localStorage
                    if (updatedStore.cart) {
                        localStorage.setItem("cart", JSON.stringify(newState.store.cart));
                    }

                    return newState;
                });
            }
        });

        // Merge cart from localStorage into initial state
        return {
            ...initialState,
            store: {
                ...initialState.store,
                cart: cartFromLocalStorage // Initialize cart from localStorage if available
            }
        };
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