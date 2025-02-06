import { Container, Grid, Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productSlice } from "../../redux/slices/productSlice";
import selectors from "../../redux/slices/selectors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductPreview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productSlice.actions.fetchProductStart());
  }, []);

  const products = useSelector(selectors.productList.products);

  const alertProduct = () => {
    alert("Product added!");
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={4} key={product.id}>
            <Box
              sx={{
                width: 270,
                height: 370,
                backgroundColor: "lightgray",
                display: "flex",
                alignItems: "center",

                borderRadius: 2,
                boxShadow: 3,
                flexDirection: "column",
                typography: "body1",
              }}
            >
              <Box
                className="photoHolder"
                sx={{
                  height: "50%",
                  width: "100%",
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                  backgroundColor: "darkgray",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                No Photo
              </Box>
              <Box
                className="productInfo"
                sx={{
                  height: "40%",
                  padding: "20px",
                  width: "100%",
                  marginTop: "5px",
                  color: "#051F00",
                  textAlign: "center",
                }}
              >
                <Typography component="h5" variant="h5">
                  {product.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                >
                  <Box sx={{ fontSize: "20px", color: "#DB8A29" }}>
                    {product.price}
                    <span style={{ fontSize: "15px" }}>₴</span>
                  </Box>
                  Quantity: {product.quantity}
                </Box>
                <Box sx={{ marginTop: "20px" }}>{product.description}</Box>
              </Box>
              <Box className="button" sx={{ height: "10%", width: "100%" }}>
                <Button
                  type="button"
                  onClick={alertProduct}
                  variant="contained"
                  sx={{
                    width: "100%",
                    borderRadius: 0,
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                    backgroundColor: "gray",
                  }}
                >
                  <ShoppingCartIcon sx={{ marginRight: "5px" }} />
                  Add product
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductPreview;
