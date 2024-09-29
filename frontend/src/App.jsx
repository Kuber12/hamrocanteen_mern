import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./pages/login/SignIn";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/NotFound";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import ReloadContextProvider from "./context/ReloadContextProvider";
import Admin from "./admin/Admin";
import AdminLogin from "./admin/AdminLogin";
import ViewOrder from "./pages/vieworder/ViewOrder";

function App() {
  const route = createBrowserRouter([
    //user sige
    { path: "/", element: <HomePage /> },
    { path: "/menu", element: <Menu /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
    { path: "/about", element: <About /> },
    { path: "/vieworder", element: <ViewOrder /> },

    //admin side
    { path: "admin", element: <Admin /> },
    { path: "admin/signin", element: <AdminLogin /> },
    { path: "admin/additem", element: <AdminLogin /> },
  ]);

  return (
    <ReloadContextProvider>
      <RouterProvider router={route}></RouterProvider>
    </ReloadContextProvider>
  );
}

export default App;
