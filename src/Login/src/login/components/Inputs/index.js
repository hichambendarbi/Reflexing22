import React from "react";
import Input from "./input/Styles";

export default ({ type, name, value, ...props }) => (
  <Input type={type} name={name} value={value} {...props} />
);
