import React from "react";
import Button from "@mui/material/Button";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  OutlinedInput
} from "@mui/material";

import {
  Formik,
  Field,
  FieldArray,
  useFormik,
  FormikProvider,
  getIn,
  Form
} from "formik";
import * as Yup from "yup";
import { Box } from "@mui/system";
import styles from "./form.module.scss";
import { CheckboxWithLabel } from "components/CheckboxWithLabel";
import {
  FormTextField,
  FormDropdownField,
  FormCheckboxField
} from "components/Forms/FormField";

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? (
        <div className={styles.text_danger}>{error}</div>
      ) : null;
    }}
  />
);

function Forms() {
  const validationSchema = Yup.object({
    name: Yup.string("Enter your answer").required("Name is required"),
    client_name: Yup.string("Enter your answer").required(
      "Client name is required"
    ),
    experience_level: Yup.string("Enter your answer")
      .required("Expereince Level is required")
      .typeError("Experience level is required")
      .oneOf(
        ["beginner", "intermediate", "advanced"],
        "Experience level is required"
      ),
    interview_domain: Yup.array().min(1, "At least one domain is required"),
    queries: Yup.array()
      .of(
        Yup.object().shape({
          category: Yup.string()
            .required("Category is required")
            // .typeError("Category is required")
            .oneOf(
              ["beginner", "intermediate", "advanced"],
              "Choose a category from the dropdown"
            ),
          question: Yup.string().min(4, "Too short").required("Required"),
          topic: Yup.string()
            .required("Topic is required")
            // .typeError("Topic is required")
            .oneOf(
              ["beginner", "intermediate", "advanced"],
              "Choose a topic from the dropdown"
            ),
          answer: Yup.string().min(4, "Too short").required("Required")
        })
      )
      // .required("Must have queries")
      .min(1, "Minimum of 1 query")
  });
  const dataColumns = [
    {
      title: "Name"
    },
    {
      title: "Client Name"
    },
    {
      title: "Experience Level"
    },
    {
      title: "Interview of Domain"
    },
    {
      title: "Queries"
    }
  ];

  const initialFormData = {
    name: "",
    client_name: "",
    experience_level: "none",
    interview_domain: [],
    queries: [{ category: "none", question: "", topic: "none", answer: "" }]
  };
  const interview_domain_choices = [
    {
      label: "Software Development",
      value: "software_development"
    },
    {
      label: "Data Science",
      value: "data_science"
    },
    {
      label: "Data Analytics",
      value: "data_analytics"
    }
  ];
  const experience_level_choices = [
    {
      label: "Choose",
      value: "none"
    },
    {
      label: "Beginner",
      value: "beginner"
    },
    {
      label: "Intermediate",
      value: "intermediate"
    },
    {
      label: "Expert",
      value: "expert"
    }
  ];

  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema: validationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div>
      <Paper>
        <Grid container direction={"column"} alignItems={"center"}>
          <Box sx={{ maxWidth: { sm: "37rem", md: "50rem" } }}>
            <Typography
              variant="h2"
              component="h2"
              className={styles.main_heading}>
              Welcome to the interview form
            </Typography>
          </Box>
          <Box className={styles.form_container}>
            <FormikProvider value={formik}>
              <Form>
                <Stack className={styles.textField_container} spacing={2}>
                  <FormTextField
                    name={"name"}
                    label={"Name"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type={"text"}
                    fullWidth
                  />

                  <FormTextField
                    name={"client_name"}
                    label={"Client Name"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.client_name}
                    fullWidth
                  />

                  <FormDropdownField
                    name={"experience_level"}
                    label={"Experience Level"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.experience_level}
                    choices={experience_level_choices}
                    fullWidth
                  />

                  <FormCheckboxField
                    name={"interview_domain"}
                    label={"Interview of Domain"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    choices={interview_domain_choices}
                    fullWidth
                  />

                  <Box className={styles.dynamic_form_container}>
                    <Typography
                      variant="h3"
                      component="h3"
                      className={styles.sub_heading}>
                      Queries
                    </Typography>
                    <FieldArray name="queries">
                      {({ insert, remove, push }) => (
                        <Grid container direction={"column"}>
                          <Grid container justifyContent={"flex-end"}>
                            <Button
                              type="button"
                              variant="outlined"
                              color="secondary"
                              onClick={() =>
                                push({
                                  category: "none",
                                  question: "",
                                  topic: "none",
                                  answer: ""
                                })
                              }>
                              Add
                            </Button>
                          </Grid>
                          {formik.values.queries.length > 0 &&
                            formik.values.queries.map((queries, index) => {
                              const category = `queries[${index}].category`;
                              const question = `queries[${index}].question`;
                              const topic = `queries[${index}].topic`;
                              const answer = `queries[${index}].answer`;

                              return (
                                <Grid
                                  container
                                  direction={"column"}
                                  key={index}
                                  paddingTop={2}>
                                  <Grid container justifyContent={"flex-end"}>
                                    {formik.values.queries.length > 1 && (
                                      <Button
                                        margin="normal"
                                        type="button"
                                        color="primary"
                                        variant="text"
                                        disabled={
                                          index === 0 &&
                                          formik.values.queries.length === 1
                                        }
                                        onClick={() => remove(index)}>
                                        Remove
                                      </Button>
                                    )}
                                  </Grid>
                                  <Grid container direction={"row"} spacing={2}>
                                    <Grid item xs={6}>
                                      <FormDropdownField
                                        name={category}
                                        label={"Category"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={
                                          formik.values.queries[index]
                                            ?.category || "none"
                                        }
                                        choices={experience_level_choices}
                                        fullWidth
                                      />

                                      <FormTextField
                                        name={question}
                                        label={"Question"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={queries.question}
                                        type={"text"}
                                        fullWidth
                                      />
                                    </Grid>
                                    <Grid item xs={6}>
                                      <FormDropdownField
                                        name={topic}
                                        label={"Topic"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={
                                          formik.values.queries[index]?.topic ||
                                          "none"
                                        }
                                        choices={experience_level_choices}
                                        fullWidth
                                      />
                                      <FormTextField
                                        name={answer}
                                        label={"Answer"}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={queries.answer}
                                        type={"text"}
                                        fullWidth
                                      />
                                    </Grid>
                                  </Grid>
                                  {index !==
                                    formik.values.queries.length - 1 && (
                                    <Grid item>
                                      <Divider />
                                    </Grid>
                                  )}
                                </Grid>
                              );
                            })}
                        </Grid>
                      )}
                    </FieldArray>
                  </Box>
                </Stack>
                <Grid item xs={12} pt={4}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ paddingY: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Form>
            </FormikProvider>
          </Box>
        </Grid>
      </Paper>
      <Grid>
        <Divider />
      </Grid>
    </div>
  );
}

export default Forms;
