
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmark from './pages/Bookmark.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import SingleBlog from './pages/SingleBlog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles/?per_page=20&top=7')
      },
      {
        path: `/blog/:id`,
        element: <SingleBlog></SingleBlog>,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`)
      },
      {
        path: '/bookmark',
        element: <Bookmark></Bookmark>
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
)
