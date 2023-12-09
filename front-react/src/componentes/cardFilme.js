import { Link, useNavigate } from 'react-router-dom'
export default function CardFilme({ filme }) {
    const navigate = useNavigate()

    function excluir(){
        fetch(`http://localhost:8080/filmes/${filme.id}`,
        {
            method:'DELETE'
        }
        )
        .then(data => {
            alert('Filme excluido com sucesso')
            navigate('/')
        })
        .catch((error)=> alert(error))
    }
    return (
        <div className="card col-sm-3 m-3 p-3">
            <h3 className="text-center">Filme: {filme.id} </h3>
            <hr />
            <p><b>Titulo:</b>  {filme.titulo}</p>
            <p><b>Descricao:</b> {filme.descricao}</p>
            <p><b>Nota:</b> {filme.valorUnitario}</p>
            <p><b>Genero:</b>  {filme.genero?.nome}</p>
            <div className="d-flex justify-content-between">
               <Link to={`/editar/filme/${filme.id}`}><button className="btn btn-primary">Editar</button></Link> 
                <button 
                   className="btn btn-danger"
                   onClick={excluir}
                   >Excluir</button>
            </div>
        </div>
    )
}