import { Modal, Box, Typography, Button } from "@mui/material";
import { productSlice } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";

const DeleteModal = ({ open, onClose, product }) => {
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    if (product) {
      dispatch(productSlice.actions.deleteProductStart(product.id));
    }
    onClose();
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "500px",
          width: "100%",
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h4" color="black">
          Are u sure you want to delete this product?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "30px" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#5B5B5B", marginTop: "30px" }}
            type="submit"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF7373", marginTop: "30px" }}
            type="submit"
            onClick={handleConfirmDelete}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
