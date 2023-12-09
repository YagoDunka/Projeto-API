import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Filme from './componentes/filme';
import CardFilme from './componentes/cardFilme';


const rotas = createBrowserRouter([
  { path:'/', 
    element: <App />,
    children:[
      { path:'/filme/cadastrar', element: <Filme />},
      { path:'/filme/consultar', element: <CardFilme />},
      { path:'/editar/filme', element: <Filme />},
      { path:'/excluir/filme', element: <Filme />},
    ]
  }  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>
);