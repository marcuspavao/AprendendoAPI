import Header from "../../Components/Header"
import './styles.css'
import { useState } from "react"
import Nomes from "../../Components/Nomes"
import { Provider } from "react-redux"
import store from '../../store'

export default function About() {


    const [listName, setListName] = useState('')

    return (
        <>
            <Header />
            <div className="App">
                <div class="about">
                    <h1>Sobre</h1>
                    <div class="inf">
                    <input type="number" name="num" min="0" max="10" value={listName} onChange={event => setListName(event.target.value)}/>
                        <Nomes cliente={listName}/>
                    </div>
                </div>
            </div>
        </>
    )
}