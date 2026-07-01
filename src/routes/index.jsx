import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../containers/Home";
import { Sobre } from "../containers/Sobre";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Sobre />,
      },
    ],
  },
]);
