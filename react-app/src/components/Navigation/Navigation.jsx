import { Box, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import modalSlice from "../../redux/slices/modalSlice";
import AddProduct from "../AddProduct/AddProduct";
import AddProductTable from "../AddProductTable/AddProductTable";
import styles from "./Navigation.module.scss";
import selectors from "../../redux/slices/selectors";

const Navigation = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectors.openState.open);

  const handleOpen = () => {
    dispatch(modalSlice.actions.openModal());
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <NavLink className={styles.button} to="/product-preview">
        Preview
      </NavLink>
      <AddProduct onOpen={handleOpen} />

      <AddProductTable open={open} />
    </Box>
  );
};

export default Navigation;
