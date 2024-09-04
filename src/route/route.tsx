import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout/DashboardLayout";
import About from "@/pages/About/About";
import Products from "@/pages/AllProducts/Products";
import Blog from "@/pages/Blog/Blog";
import Cart from "@/pages/Cart/Cart";
import Contact from "@/pages/Contact Us/Contact";
import AddBlogs from "@/pages/Dashboard/Admin/AddBlogs";
import AddProduct from "@/pages/Dashboard/Admin/AddProduct";
import AllBlogs from "@/pages/Dashboard/Admin/AllBlogs";
import Catagories from "@/pages/Dashboard/Admin/Catagories/Catagories";

import Dashboard from "@/pages/Dashboard/Admin/Dashboard";
import ManageProduct from "@/pages/Dashboard/Admin/ManageProducts/ManageProduct";
import MyOrder from "@/pages/Dashboard/Admin/MyOrder";
import Orders from "@/pages/Dashboard/Admin/AllOrder/Orders";
import Home from "@/pages/Home/Home";
import Payment from "@/pages/Payment/Payment";
import SingleProduct from "@/pages/SingleProduct/SingleProduct";
import { createBrowserRouter } from "react-router-dom";
import CheckoutSuccess from "@/pages/Success page/CheckoutSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "singleProduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "success",
        element: <CheckoutSuccess />,
      },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "create-product",
        element: <AddProduct />,
      },
      {
        path: "catagories",
        element: <Catagories />,
      },
      {
        path: "manage-product",
        element: <ManageProduct />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "my-orders",
        element: <MyOrder />,
      },
      {
        path: "create-blogs",
        element: <AddBlogs />,
      },
      {
        path: "all-blogs",
        element: <AllBlogs />,
      },
    ],
  },
]);

export default router;
