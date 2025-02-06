import { Outlet } from "react-router-dom";
import { CssBaseline, Typography, Container } from "@mui/material";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
