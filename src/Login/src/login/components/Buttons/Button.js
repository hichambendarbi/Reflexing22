import React from "react";
import Button from "./Styles";

export default ({ name, value, text, bgColor, borderColor, ...props }) => (
  <Button
    bgColor={bgColor}
    borderColor={borderColor}
    name={name}
    value={value}
    {...props}
  >
    {text}
  </Button>
);
