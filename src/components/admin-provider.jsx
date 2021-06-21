import React, { createContext, useContext, useReducer } from "react";

const AdminStateContext = createContext();
const AdminDispatchContext = createContext();

export const adminActionTypes = {
  setAdmin: "SET_ADMIN",
  setUsername: "SET_ADMIN_USERNAME",
  setPassword: "SET_ADMIN_PASSWORD",
};

function adminReducer(state, action) {
  const { type, payload } = action;
  if (type === adminActionTypes.setAdmin) {
    return { ...state, ...payload };
  } else if (type === adminActionTypes.setPassword) {
    return { ...state, passwords: payload };
  } else if (type === adminActionTypes.setUsername) {
    return { ...state, username: payload };
  } else {
    return state;
  }
}

export function AdminProvider({ children }) {
  const [state, dispatch] = useReducer(adminReducer, {});

  return (
    <AdminStateContext.Provider value={state}>
      <AdminDispatchContext.Provider value={dispatch}>
        {children}
      </AdminDispatchContext.Provider>
    </AdminStateContext.Provider>
  );
}

export function useAdminState() {
  const state = useContext(AdminStateContext);
  if (state === undefined) {
    throw new Error("useAdminState should be within AdminProvider");
  }
  return state;
}

export function useAdminDispatch() {
  const dispatch = useContext(AdminDispatchContext);
  if (dispatch === undefined) {
    throw new Error("useAdminDispatch should be within AdminProvider");
  }
  return dispatch;
}
