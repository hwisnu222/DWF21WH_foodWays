import { createContext, useReducer } from "react";

export const RoleContext = createContext();

const initialstate = {
  role: "",
};

function reducerFunc(state, action) {
  const { type } = action;

  switch (type) {
    case "USER":
      return { role: "user" };
    case "PARTNER":
      return { role: "partner" };
    case "USER_LOGOUT":
      return { role: "" };
    default:
      throw new Error();
  }
}

export const RoleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialstate);

  return (
    <RoleContext.Provider value={[state, dispatch]}>
      {children}
    </RoleContext.Provider>
  );
};
