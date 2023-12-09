import './App.css';
import { Link, Outlet } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <nav class="bg-dark">
          <Link to='/filme/cadastrar'>Cadastro</Link>&nbsp;
          <Link to='/filme/consultar'>Consulta</Link>&nbsp;
       </nav>
       <main>
          <Outlet />
       </main>
    </div>
  );
}

export default App;