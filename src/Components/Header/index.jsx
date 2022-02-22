import NavigateButton from "../NavigateButton"
import './styles.css'
import alinha from './alinhar-justificar.svg'

export default function Header() {
    return (
        <div className="header">
            <NavigateButton pagina='/' nome="Home"/>
            <div className="dropdown-menu">
                <img src={alinha}/>
                <div className="drop-content" id="drop-content">
                    <NavigateButton pagina='/Explanation' nome="Explanation"/>
                    <NavigateButton pagina='/Covid' nome="Covid"/>
                    <NavigateButton pagina='/About' nome="Sobre"/>
                </div>
            </div> 
        </div>)

}