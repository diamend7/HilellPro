import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../../redux/slices/todoSlice";
import selectors from "../../redux/slices/selectors";

const TodoApp = () => {
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
    <div>
      <h1>TODO List</h1>
      <Formik
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div style={{ marginBottom: "10px" }}>
            <Field
              type="text"
              name="task"
              placeholder="Введіть задачу"
              style={{
                padding: "10px",
                width: "100%",
              }}
            />
            <ErrorMessage
              name="task"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Додати задачу</button>
        </Form>
      </Formik>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
