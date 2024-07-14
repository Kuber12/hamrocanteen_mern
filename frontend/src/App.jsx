import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
 const route = createBrowserRouter([
  {path:"/", element:<HomePage/>}
 ])

  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
