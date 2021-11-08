import React from "react";
import Context from "./context";

const defaultValues = {
  service: "",
  setService: service => (defaultValues.service = service)
};

const contextContainer = props => (
  <Context.Provider value={defaultValues}>
    {props.children}
  </Context.Provider>
);

export default contextContainer;