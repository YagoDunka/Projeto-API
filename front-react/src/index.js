import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Filme from './componentes/filme';
import CardFilme from './componentes/cardFilme';
import Consulta from './componentes/consulta';
 
 
const rotas = createBrowserRouter([
  { path:'/',
    element: <App />,
    children:[
      { path:'/filme/cadastrar', element: <Filme />},
      { path:'/filme/consultar', element: <Consulta />}
    ]
  }  
])
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
);