import React from "react";

const defaultValues = {
  service: "",
  setService: () => {}
};
const context = React.createContext(defaultValues);
export default context;