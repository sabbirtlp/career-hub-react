import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home/Home'
import Root from './components/Root/Root'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'
import Jobs from './components/Jobs/Jobs'
import Blogs from './components/Blogs/Blogs'
import ErrorPage from './components/ErrorPage/ErrorPage'
import JobDetails from './components/JobDetails/JobDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=>fetch('../jobs.json')
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
