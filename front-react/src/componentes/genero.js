import { useState } from 'react'
export default function Genero() {
    const [nome, setNome] = useState('')
    const [status, setStatus] = useState('')

    function salvar() {
        let prod = {titulo, nota, descricao}
        fetch('http://localhost:8080/genero',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(prod)
            }
        )
    }

    <div className="container">
            <h1 className="text-center mt-4">Novo Genero</h1>
            <label className="form-label">Informe o Nome</label>
            <input
                className="form-control"
                type="text"
                placeholder="Nome do Genero"
                value={nome}
                onChange={(txt) => setNome(txt.target.value)}
            />
            <label className="form-label">Informe o Status</label>
            <input
                className="form-control"
                type="text"
                placeholder="Status do Genero"
                value={status}
                onChange={(txt) => setStatus(txt.target.value)}/>
    </div>
}