import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
export default function EditaFilme() {
    const [titulo, setTitulo] = useState('')
    const [nota, setNota] = useState('')
    const [descricao, setDescricao] = useState('')
    
    const { idFilme } = useParams();
    
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:8080/filmes/${idFilme}`)
        .then(data => data.json())
        .then(response => {
            setTitulo(response.titulo);
            setNota(response.nota);
            setDescricao(response.descricao);
        });
    },[]);

    function salvar() {
        let film = {id: idFilme, titulo, nota, descricao}
        fetch(`http://localhost:8080/filmes/${idFilme}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(film)
            }
        )
        .then(x => navigate('/'))
        .catch(error => alert(error))
    }

    return (
        <div className="container">
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