import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../../redux/slices/todoSlice";
import selectors from "../../redux/slices/selectors";
import {
  Paper,
  Typography,
  Box,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import Item from "../Item/Item";

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectors.todoList.todos);

  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, "Мінімальна довжина 5 символів")
      .required("Поле обов’язкове"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(todoSlice.actions.addTodo(values.task));
    resetForm();
  };

  return (
    <Paper
      sx={{
        backgroundColor: "gray",
        typography: "body1",
        padding: "10px",
      }}
    >
      <Typography variant="h5" component="h4" color="white">
        TODO List
      </Typography>
      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box>
            <Field
              type="text"
              name="task"
              placeholder="Введіть задачу"
              as={TextField}
            />
            {/* чому не TextField?  */}
            <ErrorMessage
              name="task"
              component="div"
              style={{ color: "red" }}
            />
          </Box>

          <Button
            variant="outlined"
            sx={{ backgroundColor: "hsl(210, 14%, 56%)", marginTop: "10px" }}
            type="submit"
          >
            Додати задачу
          </Button>
        </Form>
      </Formik>

      <Stack spacing={1} sx={{ marginTop: "10px" }}>
        {todos.map((todo) => (
          <Item key={todo.id}>{todo.task}</Item>
        ))}
      </Stack>
    </Paper>
  );
};

export default TodoPage;
