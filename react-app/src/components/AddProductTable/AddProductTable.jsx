import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { TextField, Modal, Typography, Box, Button, Grid } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { productSlice } from "../../redux/slices/productSlice";
import modalSlice from "../../redux/slices/modalSlice";
import selectors from "../../redux/slices/selectors";

const AddProductTable = ({ open }) => {
  const validationSchema = Yup.object({
    category: Yup.string().required("This field is required"),
    name: Yup.string().required("This field is required"),
    quantity: Yup.number()
      .typeError("Must be a number")
      .required("This field is required"),
    price: Yup.number()
      .typeError("Must be a number")
      .required("This field is required"),
  });

  const dispatch = useDispatch();

  const product = useSelector(selectors.productList.editingProduct);

  const handleSubmit = (values, { resetForm }) => {
    if (product) {
      const updatedValues = { ...values, id: product.id };
      dispatch(productSlice.actions.updateProductStart(updatedValues));
    } else {
      dispatch(productSlice.actions.addProductStart(values));
    }

    resetForm();
    dispatch(modalSlice.actions.closeModal());
    dispatch(productSlice.actions.clearEditingProduct());
  };

  const handleClose = () => {
    dispatch(modalSlice.actions.closeModal());
    dispatch(productSlice.actions.clearEditingProduct());
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "430px",
          width: "100%",
          bgcolor: "white",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" component="h4" color="black">
          {product ? "Edit Product" : "Add Product"}
        </Typography>
        <Formik
          initialValues={{
            category: product?.category || "",
            name: product?.name || "",
            quantity: product?.quantity || "",
            price: product?.price || "",
            description: product?.description || "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form style={{ marginTop: "20px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Field
                  type="category"
                  name="category"
                  as={TextField}
                  id="outlined-basic"
                  label="Сategory"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  name="category"
                  component="div"
                  style={{
                    color: "red",
                    position: "absolute",
                    fontSize: "13px",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  type="name"
                  name="name"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  as={TextField}
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  style={{
                    color: "red",
                    position: "absolute",
                    fontSize: "13px",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  type="quantity"
                  name="quantity"
                  id="outlined-basic"
                  label="Quantity"
                  variant="outlined"
                  as={TextField}
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  style={{
                    color: "red",
                    position: "absolute",
                    fontSize: "13px",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Field
                  type="price"
                  name="price"
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  as={TextField}
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  style={{
                    color: "red",
                    position: "absolute",
                    fontSize: "13px",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Field
                  type="description"
                  name="description"
                  placeholder="Description"
                  as={TextField}
                  style={{ width: "100%", fieldSizing: "content" }}
                />
              </Grid>
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF6B6B",
                  marginTop: "30px",
                }}
                type="button"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "hsl(210, 14%, 56%)",
                  marginTop: "30px",
                }}
                type="submit"
              >
                {product ? "Update Product" : "Confirm"}
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
};

export default AddProductTable;
