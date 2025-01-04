import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, "Мінімальна довжина 5 символів")
      .required("Поле обов’язкове"),
  });

  const handleSubmit = (values, { resetForm }) => {
    setTodos([...todos, values.task]);
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
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
