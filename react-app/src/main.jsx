import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store.js";
import TodoApp from "./component/TodoApp/TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <TodoApp />
    </StrictMode>
  </Provider>
);
