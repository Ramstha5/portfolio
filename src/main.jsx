import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import myStore from "./store/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProject from "./components/AllProject.jsx";
import Home from "./routes/Home.jsx";
import RedirectResume from "./components/RedirectResume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/app", element: <App /> },
      { path: "/archive", element: <AllProject /> },
      { path: "/redirectResume", element: <RedirectResume /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
