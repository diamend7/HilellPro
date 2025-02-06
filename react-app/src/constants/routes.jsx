import Login from "../pages/Login/Login";
import ProductPreview from "../pages/ProductPreview/ProductPreview";
import ProductTable from "../pages/ProductTable/ProductTable";

export const routes = {
  login: {
    element: <Login />,
    path: "/login",
    key: 1,
  },
  productTable: {
    element: <ProductTable />,
    path: "/product-table",
    key: 2,
  },
  productPreview: {
    element: <ProductPreview />,
    path: "/product-preview",
    key: 3,
  },
};
