import React from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  Box,
  Stack
} from "@mui/material";
import { Formik, Field, FormikProvider, Form, useFormik } from "formik";
import AppDispatcher from "redux/dispatchers/appDispatcher";
import { useHistory } from "react-router-dom";
import { FormTextField } from "components/Forms/FormField";
import * as Yup from "yup";

const Login = () => {
  const history = useHistory();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required")
  });

  const userLogin = (values) => {
    AppDispatcher.setUserLoggedIn({
      token: "djkhfkdhfdhfs",
      user: { name: "Test", email: values.email }
    });
    history.push("/u/forms");
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
      userLogin(values);
    }
  });

  return (
    <React.Fragment>
      <Typography variant="h3">Welcome Back!</Typography>
      <Typography variant="subtitle">
        Enter your email and password to login
      </Typography>
      <Grid container>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "37rem",
            paddingBottom: "2rem"
          }}>
          <FormikProvider value={formik}>
            <Form>
              <Stack sx={{ marginTop: "1.5rem" }}>
                <FormTextField
                  name={"email"}
                  label={"Email"}
                  placeholder={"Enter your email"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  type={"email"}
                  fullWidth
                />

                <FormTextField
                  name={"password"}
                  label={"Password"}
                  placeholder={"Password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  fullWidth
                  type={"password"}
                />

                <Button
                  type="submit"
                  disabled={!formik.isValid}
                  variant="contained"
                  size="large">
                  Login
                </Button>
              </Stack>
            </Form>
          </FormikProvider>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
