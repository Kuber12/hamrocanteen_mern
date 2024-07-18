import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignIn from './pages/login/SignIn'

function App() {
 const route = createBrowserRouter([
  {path:"/", element:<HomePage/>},
  {path:"/signIn",element:<SignIn/>}
 ])

  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
