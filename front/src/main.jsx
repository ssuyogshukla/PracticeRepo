import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginForm from './components/LoginForm'
import App from './App'

 import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> 
   {/* <LoginForm/> */}
  
  </StrictMode>,
)
