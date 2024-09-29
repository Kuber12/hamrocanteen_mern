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
import AddItem from "./admin/AddItem";
import AdminDashBoard from "./admin/components/AdminDashBoard";

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
    {
      path: "admin",
      element: <Admin />,
      children: [
        { path: "", element: <AdminDashBoard /> },
        { path: "/admin/additem", element: <AddItem /> },
      ],
    },
    { path: "admin/signin", element: <AdminLogin /> },
  ]);

  return (
    <ReloadContextProvider>
      <RouterProvider router={route}></RouterProvider>
    </ReloadContextProvider>
  );
}

export default App;
