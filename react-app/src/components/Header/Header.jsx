import { Typography, Box, Paper, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          borderBottom: "2px solid gray",
        }}
      >
        <Typography variant="h4" component="h3">
          Navigation
        </Typography>

        <Box sx={{ marginLeft: "20px" }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <IconButton>
              <Typography color="lightblue">Home</Typography>
            </IconButton>
          </NavLink>
          <NavLink to="/TodoPage" style={{ textDecoration: "none" }}>
            <IconButton>
              <Typography color="lightblue">TodoPage</Typography>
            </IconButton>
          </NavLink>
          <NavLink to="/Swapi" style={{ textDecoration: "none" }}>
            <IconButton>
              <Typography color="lightblue">Swapi</Typography>
            </IconButton>
          </NavLink>
        </Box>
      </Box>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </>
  );
};

export default Header;
