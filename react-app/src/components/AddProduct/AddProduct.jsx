import { Box, Typography } from "@mui/material";
import styles from "../Navigation/Navigation.module.scss";
import AddIcon from "@mui/icons-material/Add";

const AddProduct = ({ onOpen }) => {
  return (
    <Box>
      <Typography
        className={styles.button}
        sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        onClick={onOpen}
      >
        Add Product <AddIcon />
      </Typography>
    </Box>
  );
};

export default AddProduct;
