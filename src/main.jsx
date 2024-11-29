import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AddUsers from './components/AddUsers.jsx';

import Users from './components/Users.jsx';
import UpdateUser from './components/UpdateUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: 'add-users',
    element: <AddUsers></AddUsers>
    
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users'),
   
      
    
  },
  {
      
    path: '/update-users/:id',
    element: <UpdateUser></UpdateUser>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)

   }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
