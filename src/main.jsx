import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/routes.jsx'
import AuthProvider from './Providers/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='md:w-3/4 mx-auto'>
      <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
