import { Routes, Route } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { routes } from "./constants/routes";
import { Provider } from "react-redux";
import { history, store } from "./redux/store";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {Object.keys(routes).map((route) => (
              <Route
                path={routes[route].path}
                element={routes[route].element}
                key={routes[route].element}
              ></Route>
            ))}
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
