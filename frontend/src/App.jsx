import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignIn from './pages/login/SignIn'
import HomePage from './pages/home/HomePage'
import NotFound from './pages/NotFound'

function App() {
 const route = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/signIn",element:<SignIn/>},
  {path:"/*", element:<NotFound/>}
 ])

  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
