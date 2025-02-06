import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Container, Typography, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Navigation from "../../components/Navigation/Navigation";
import {
  fetchProductStart,
  productSlice,
} from "../../redux/slices/productSlice";
import selectors from "../../redux/slices/selectors";
import modalSlice from "../../redux/slices/modalSlice";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

const ProductTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProductStart());
  }, []);

  const paginationModel = { page: 0, pageSize: 10 };
  const products = useSelector(selectors.productList.products);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 120,
      renderCell: (params) => (
        <div title={params.row.description}>{params.value}</div>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      width: 130,
      renderCell: (params) => (
        <div title={params.row.description}>{params.value}</div>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      width: 130,
      renderCell: (params) => (
        <div title={params.row.description}>{params.value}</div>
      ),
    },
    {
      field: "quantity",
      headerName: "Quantiny",
      width: 90,
      renderCell: (params) => (
        <div title={params.row.description}>{params.value}</div>
      ),
    },
    {
      field: "price",
      headerName: "Price (₴)",
      width: 160,
      renderCell: (params) => (
        <div title={params.row.description}>{params.value}</div>
      ),
    },

    {
      field: "edit",
      headerName: "",
      width: 30,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => handleEdit(params)}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "",
      width: 0,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params)}>
          <DeleteOutlineIcon />
        </IconButton>
      ),
    },
  ];

  const rows = products.map((item) => {
    return {
      ...item,
    };
  });

  const handleEdit = (product) => {
    dispatch(productSlice.actions.setEditingProduct(product.row));
    dispatch(modalSlice.actions.openModal());
  };

  const handleDelete = (product) => {
    setSelectedProduct(product.row);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Navigation />
      <Container sx={{ textAlign: "center" }}>
        <Typography component="h2" variant="h2">
          Products
        </Typography>

        <Paper sx={{ width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{
              border: "0",

              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#D9D9D9",
              },
              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: "#333",
                color: "white",
              },

              "& .MuiDataGrid-row.Mui-selected": {
                backgroundColor: "inherit !important",
              },
              "& .MuiDataGrid-row.Mui-selected:nth-of-type(even)": {
                backgroundColor: "#D9D9D9 !important",
              },
              "& .MuiDataGrid-row.Mui-selected:nth-of-type(odd)": {
                backgroundColor: "#333 !important",
                color: "white",
              },

              "& .MuiDataGrid-cell": {
                textAlign: "center",
              },
              "& .MuiDataGrid-columnHeaders": {
                textAlign: "center",
              },
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                display: "flex",
                justifyContent: "center",
              },
            }}
          />
        </Paper>
      </Container>

      <DeleteModal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        product={selectedProduct}
      />
    </Box>
  );
};

export default ProductTable;
