import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import SignIn from './pages/login/SignIn'
import HomePage from './pages/home/HomePage'
import NotFound from './pages/NotFound'
import About from './pages/about/About'
import Menu from './pages/menu/Menu'
import ReloadContextProvider from './context/ReloadContextProvider'

function App() {
 const route = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/menu", element:<Menu/>},
  {path:"/signin",element:<SignIn/>},
  {path:"/*", element:<NotFound/>},
  {path:"/about",element:<About/>}
 ])

  return (
    <ReloadContextProvider>
      <RouterProvider router={route}></RouterProvider>
    </ReloadContextProvider>
  )
}

export default App
