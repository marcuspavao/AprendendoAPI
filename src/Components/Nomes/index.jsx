import './styles.css'
import { useState } from "react"

function Nomes(props) {
    const [listName, setListName] = useState('')
    const [listIdade, setIdade] = useState()
    const [listaCompleta, setlistaCompleta] = useState([])

    function local() {
        
        setlistaCompleta([listName, ...listaCompleta])
        if (localStorage.visitas) {
            localStorage.visitas = Number(localStorage.visitas) + 1
        } else {
            localStorage.visitas = 1
        }
        let cliente = {
            nome: listName,
            idade: listIdade
        }
        localStorage.setItem('cliente' + Number(localStorage.visitas), `Nome: ${cliente.nome}, Idade: ${cliente.idade}` )
        
        localStorage.setItem('ListaCompleta',listaCompleta)
    }

    

    const list = listaCompleta.map(item => {
        return (
            <div>
                <h1>{item}</h1>                
            </div>
        )
    })
    
    return (
        <div>
            <input type="text"  value={listName} onChange={event => setListName(event.target.value)} />
            <input type="text" value={listIdade} onChange={event => setIdade(event.target.value)} />
                        <button onClick={() => local()}>Enviar</button>
            <h1>{localStorage.getItem('cliente'+ props.cliente)}</h1>
            <div className="button">Lista Completa
            <div className="lista">
            {list}
            </div></div>
        </div>
    )
}

export default Nomes