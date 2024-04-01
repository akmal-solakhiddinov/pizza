import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as OrderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createNewOrder,
} from "./features/order/CreateOrder";

import { action as UpdateOrderAction } from "./ui/UpdateOrder";

import { AppLayout } from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder />, action: createNewOrder },
      {
        path: "/order/:orderID",
        element: <Order />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
