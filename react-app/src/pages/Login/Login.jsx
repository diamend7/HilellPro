import { Typography, Container, Paper } from "@mui/material";
import Logo from "../../components/Logo/Logo";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15%",
        maxHeight: "670px",
        maxWidth: "460px",
        width: "100%",
        padding: "80px 20px  120px 20px ",
        borderRadius: "15px",
      }}
    >
      <Logo />
      <LoginForm />
    </Paper>
  );
};

export default Login;
