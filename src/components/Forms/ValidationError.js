import React from "react";
import { Field, getIn } from "formik";
import { Box } from "@mui/material";

const ValidationError = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? (
        <Box sx={styles.text_danger}>{error}</Box>
      ) : null;
    }}
  />
);

const styles = {
  text_danger: {
    color: "#d9001d",
    fontSize: "0.8rem",
    fontWeight: "bold",
    marginTop: "0.5rem"
  }
};


export default ValidationError;