import { useEffect, useState } from "react"
import CardFilme from "./cardFilme"
 
export default function Consulta(){
    const[filmes, setFilmes] = useState([])
    function consultar(){
        fetch('http://localhost:8080/filmes')
        .then(data => data.json())
        .then(response => setFilmes(response))
    }
 
    useEffect( ()=>{consultar()},[])
 
    return(
        <div className="d-flex flex-wrap  ">
            {
                filmes.map(film => <CardFilme filme={film}/>)
            }
        </div>
    )
}