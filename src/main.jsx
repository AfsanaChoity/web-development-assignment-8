
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Bookmark from './pages/Bookmark.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import SingleBlog from './pages/SingleBlog.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: '/listedBooks',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles/?per_page=20&top=7')
      },
      {
        path: `/book/:id`,
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`/fakeData.json/${params.id}`)
      },
      {
        path: '/pageToRead',
        element: <PagesToRead></PagesToRead>
      },
      {
        path: '/bookDetails',
        element: <BookDetails></BookDetails>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}></RouterProvider>
  </>
)
