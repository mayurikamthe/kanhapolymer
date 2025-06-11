import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Shop from "./pages/Shop/Shop.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Faq from "./pages/Faq.tsx";
import Error from "./pages/Error.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />, // ✅ Contact route added
      },
      {
        path: "/about",
        element: <About />, // ✅ Add this route
      },
      {
        path: "/faq",
        element: <Faq />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <Error />,
  },
]);

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
