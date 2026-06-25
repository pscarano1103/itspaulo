import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../containers/Home";
import { Contato } from "../containers/Contato";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contato />,
      },
    ],
  },
]);
