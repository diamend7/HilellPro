import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice, fetchStart } from "../../redux/slices/todoSlice";
import selectors from "../../redux/slices/selectors";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectors.todoList.todos);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    dispatch(fetchStart());
  }, []);

  const validationSchema = Yup.object({
    task: Yup.string()
      .min(5, "Мінімальна довжина 5 символів")
      .required("Поле обов’язкове"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(todoSlice.actions.addTodoStart(values.task));

    resetForm();
  };

  const handleRemove = (id) => {
    dispatch(todoSlice.actions.deleteTodoStart(id));
  };

  const handleCheckBox = (id, completed) => {
    dispatch(todoSlice.actions.checkBoxStart({ id, completed }));
  };

  const handleEdit = (todo) => {
    setEditingTodoId(todo.id);
    setNewTask(todo.task);
  };

  const handleUpdate = () => {
    if (editingTodoId) {
      dispatch(
        todoSlice.actions.updateTodoStart({
          id: editingTodoId,
          task: newTask,
        })
      );
      setEditingTodoId(null);
      setNewTask("");
    }
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
          <div key={todo.id} style={{ display: "flex" }}>
            <li>{todo.task}</li>
            <button
              type="button"
              className="deleteButton"
              onClick={() => handleRemove(todo.id)}
            >
              Delete
            </button>
            <input
              type="checkbox"
              checked={todo.completed || false}
              onChange={() => handleCheckBox(todo.id, !todo.completed)}
            ></input>
            <button onClick={() => handleEdit(todo)}>Change</button>
            {editingTodoId === todo.id && (
              <div>
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleUpdate}>Confirm</button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
