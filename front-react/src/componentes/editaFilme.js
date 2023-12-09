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
        let film = {id: idFilme, titulo, nota, descricao, genero}
        fetch(`http://localhost:8080/produtos/${idProduto}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod)
            }
        )
        .then(x => navigate('/'))
        .catch(error => alert(error))
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4">Editar ID: { idProduto } </h1>
            <label className="form-label">Informe descrição</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe descrição"
                value={descricao}
                onChange={(txt) => setDescricao(txt.target.value)}
            />
            <label className="form-label">Informe valor</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe valor"
                value={valorUnitario}
                onChange={(txt) => setvalorUnitario(txt.target.value)}
            />

            <label className="form-label">Informe estoque</label>
            <input
                className="form-control"
                type="text"
                placeholder="informe estoque"
                value={estoque}
                onChange={(txt) => setEstoque(txt.target.value)}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={salvar}
            >Gravar</button>
        </div>
    )
}