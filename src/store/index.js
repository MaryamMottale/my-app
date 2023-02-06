import { combineReducers, createStore } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { createContext } from "vm";
import { isDarkReducer } from "./isDark";
import { langReducer } from "./lang";

export const store = createStore(
  combineReducers({
    isDark: isDarkReducer,
    lang: langReducer,
  })
);

export const storeContext = createContext();

const StoreProvider = ({ children }) => {
  // listen to store updates
  const [, rerender] = useState(1);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      rerender((r) => r + 1);

      console.log(store.getState());
    });

    // when component unmounted, don't listen
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};
export default StoreProvider;
