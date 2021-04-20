import { createContext, useReducer } from "react";

export const LocationContext = createContext();

const initialstate = {
  location: "",
};

function reducerFunc(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOCATION":
      return { location: payload.location };
  }
}

export const LocationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialstate);

  return (
    <LocationContext.Provider value={[state, dispatch]}>
      {children}
    </LocationContext.Provider>
  );
};
