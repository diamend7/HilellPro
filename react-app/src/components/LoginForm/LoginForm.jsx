import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import {
  Typography,
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showErrorBelow, setShowErrorBelow] = useState(false);
  const [clickedSubmit, setClickedSubmit] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string().required("Поле обов’язкове"),
    password: Yup.string().required("Поле обов’язкове"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post("http://localhost:3000/login", values);

      localStorage.setItem("token", response.data.token);
      navigate("/product-table");
      setClickedSubmit(true);
    } catch (error) {
      setShowErrorBelow(true);
    }

    resetForm();
  };

  const newPage = () => {
    navigate("/product-table");
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        username: "",
        password: "",
      }}
    >
      <Form style={{ width: "60%" }}>
        <Box sx={{ marginTop: "40px" }}>
          <Field
            style={{ width: "100%" }}
            type="text"
            name="username"
            placeholder="User Name"
            as={TextField}
            onClick={() => {
              setShowErrorBelow(false);
            }}
          />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />
        </Box>

        <Box sx={{ marginTop: "25px" }}>
          <Field
            style={{ width: "100%" }}
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            as={TextField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onClick={() => {
              setShowErrorBelow(false);
            }}
          />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3f3f3f",
              marginTop: "45px",
              width: "70%",
              height: "50px",
              color: "white",
              borderRadius: "20px",
            }}
            disabled={showErrorBelow}
            type="submit"
          >
            Login
          </Button>
          {showErrorBelow && (
            <div className="errorMessage" style={{ color: "red" }}>
              Неправильний пароль або ім'я!
            </div>
          )}
        </Box>
      </Form>
    </Formik>
  );
};

export default LoginForm;
