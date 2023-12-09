import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
 
export default function CardFilme({ filme }) {
    const navigate = useNavigate();
 
    function excluir() {
        fetch(`http://localhost:8080/filmes/${filme.id}`, {
            method: 'DELETE'
        })
            .then(data => {
                alert('Filme excluído com sucesso');
                navigate('/');
            })
            .catch((error) => alert(error));
    }
 
    return (
        <div className="card col-sm-3 m-3 p-3 shadow-sm">
            <h3 className="text-center">Filme: {filme.titulo}</h3>
            <hr />
            <p><b>Título:</b> {filme.titulo}</p>
            <p><b>Descrição:</b> {filme.descricao}</p>
            <p><b>Nota:</b> {filme.nota}</p>
            <div className="d-flex justify-content-between">
                <Link to={`/editar/filme/${filme.id}`}>
                <button className="btn btn-primary">Editar</button></Link>
                <button className="btn btn-danger" onClick={excluir} >Excluir</button>
            </div>
        </div>
    );
}