import config from "@/assets/config.json";
import React, { createContext, useContext, useReducer } from "react";

const adminInitialState = config.admin || {};

const adminReducer = (action, state = adminInitialState) => {
  return state;
};

const AdminStateContext = createContext();

export function AdminProvider({ children }) {
  // TODO: add dispatch
  const [state] = useReducer(adminReducer);
  return (
    <AdminStateContext.Provider value={state}>
      {children}
    </AdminStateContext.Provider>
  );
}

export function useAdminContext() {
  const admin = useContext(AdminStateContext);
  if (admin === undefined) {
    throw new Error("useAdminContext should be within AdminProvider");
  }
  return admin;
}
