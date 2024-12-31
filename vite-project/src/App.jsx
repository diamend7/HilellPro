import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import AboutMe from "./components/AboutMe/AboutMe";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className={theme === "dark" ? "blackTheme" : "lightTheme"}>
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/" element={<Main />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/aboutme" element={<AboutMe />}></Route>
          </Routes>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
