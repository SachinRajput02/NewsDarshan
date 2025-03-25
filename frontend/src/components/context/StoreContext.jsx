import {React,createContext} from 'react'
import axios from "axios";
export const StoreContext = createContext(null);



const StoreContextProvider = (props) => {
  const url ="https://newsdarshan-backend.onrender.com";
  // const url ="http://localhost:5000";
  const contextValue = {
    url

  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;


