import React from "react";

export const Title = ({
  children,
  style,
  weight = "regular",
  color,
  onClick
}) => (
  <h3 onClick={onClick} style={[{fontWeight: weight}, { color }, style]}>
    {children}
  </h3>
);
