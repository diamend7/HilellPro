import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "@mui/material/Container";
import TodoPage from "./components/TodoPage/TodoPage";
import Main from "./components/Main/Main";
import Swapi from "./components/Swapi/Swapi";

function App() {
  return (
    <Container fixed>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/TodoPage" element={<TodoPage />}></Route>
            <Route path="/Swapi" element={<Swapi />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;
