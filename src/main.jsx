import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseCallBack from './UseCallBack'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UseCallBack/>
  </StrictMode>,
)
