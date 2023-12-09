import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Filme() {
    const [titulo, setTitulo] = useState('')
    const [nota, setNota] = useState('')
    const [descricao, setDescricao] = useState('')
    const navigate = useNavigate();

    function salvar() {
        let film = {titulo, nota, descricao}
        fetch('http://localhost:8080/filmes',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(film)
            }).then(() => navigate('/filme/consultar'))
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center mt-4">Novo Filme</h1>
            <label className="form-label">Informe o Titulo</label>
            <input
                className="form-control"
                type="text"
                placeholder="Nome do Filme"
                value={titulo}
                onChange={(txt) => setTitulo(txt.target.value)}
            />
            <label className="form-label">Informe a Descricao</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a Descricao"
                value={descricao}
                onChange={(txt) => setDescricao(txt.target.value)}
            />

            <label className="form-label">Informe a Nota</label>
            <input
                className="form-control"
                type="text"
                placeholder="Nota do Filme"
                value={nota}
                onChange={(txt) => setNota(txt.target.value)}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={salvar}
            >Gravar</button>
        </div>
    )
}