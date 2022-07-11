import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { CheckboxWithLabel } from "components/CheckboxWithLabel";
import { useField, Field } from "formik";
import React from "react";
import ValidationError from "./ValidationError";

const FormTextField = ({ fullWidth, label, name, value, ...props }) => {
  const as = OutlinedInput;
  return (
    <div>
      <Typography variant="h2" component="h2" sx={styles.inputlabel}>
        {label}
      </Typography>
      <Field
        id={name}
        as={as}
        placeholder="Type here"
        fullWidth={fullWidth}
        sx={styles.inputfield}
        value={value}
        name={name}
        {...props}
      />
      <Box sx={styles.text_error}>
        <ValidationError name={name} />
      </Box>
    </div>
  );
};

const FormDropdownField = ({
  fullWidth,
  label,
  name,
  value,
  choices,
  ...props
}) => {
  const as = Select;
  return (
    <div>
      <Typography variant="h2" component="h2" sx={styles.inputlabel}>
        {label}
      </Typography>
      <Field
        id={name}
        as={as}
        placeholder="Type here"
        fullWidth={fullWidth}
        sx={styles.inputfield}
        value={value || "none"}
        name={name}
        {...props}>
        {choices.map((choice, idx) => (
          <MenuItem key={idx} value={choice.value}>
            {choice.label}
          </MenuItem>
        ))}
      </Field>
      <Box sx={styles.text_error}>
        <ValidationError name={name} />
      </Box>
    </div>
  );
};

const FormCheckboxField = ({
  fullWidth,
  label,
  name,
  value,
  choices,
  ...props
}) => {
  const as = CheckboxWithLabel;
  return (
    <div>
      <Typography variant="h2" component="h2" sx={styles.inputlabel}>
        {label}
      </Typography>
      <FormControl component="fieldset" style={{ display: "flex" }}>
        <FormGroup sx={styles.inputfield}>
          {choices.map((opt) => (
            <Field
              as={as}
              type="checkbox"
              key={opt.value}
              value={opt.value}
              Label={{ label: opt.label }}
              id={name}
              name={name}
              {...props}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Box sx={styles.text_error}>
        <ValidationError name={name} />
      </Box>
    </div>
  );
};

const styles = {
  text_error: {
    height: "2.5rem",
    width: "460px",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19px"
  },
  inputlabel: {
    fontWeight: "500 !important",
    fontStyle: "normal",
    fontSize: "16px !important",
    lineHeight: "20px !important",
    textAlign: "left",
    verticalAlign: "top",
    color: "#383838"
  },
  inputfield: {
    maxWidth: "40rem",
    marginTop: "1rem",
    outline: "none",
    marginBottom: "6px",
    backgroundColor: "white"
  }
};

export { FormTextField, FormDropdownField, FormCheckboxField };
