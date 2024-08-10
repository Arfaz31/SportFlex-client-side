import App from "@/App";
import About from "@/pages/About/About";
import Blog from "@/pages/Blog/Blog";
import Contact from "@/pages/Contact Us/Contact";
import Home from "@/pages/Home/Home";
import SingleProduct from "@/pages/SingleProduct/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

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
        path: "singleProduct/:id",
        element: <SingleProduct />,
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
    ],
  },
]);

export default router;
