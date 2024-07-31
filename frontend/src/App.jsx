import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignIn from './pages/login/SignIn'
import HomePage from './pages/home/HomePage'
import NotFound from './pages/NotFound'
import About from './pages/about/About'
import Menu from './pages/menu/Menu'

function App() {
 const route = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/menu", element:<Menu/>},

  {path:"/signIn",element:<SignIn/>},
  {path:"/*", element:<NotFound/>},
  {path:"/about",element:<About/>}
 ])

  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
