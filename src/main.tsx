/*
 * @Date: 2023-07-10 13:40:44
 * @Author: Bruce Hsu
 * @Description: 
 */
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
