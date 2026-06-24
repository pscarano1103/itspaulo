import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Home } from "../containers/Home";
import { WorkPage } from "../containers/Work";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <WorkPage />,
      },
    ],
  },
]);
