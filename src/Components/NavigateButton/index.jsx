import { useNavigate } from "react-router-dom"
import './styles.css'

export default function NavigateButton(pag) {
  let navigate = useNavigate()

  function handleClick() {
    navigate(pag.pagina)
  }
  return (
    <button type="button" onClick={handleClick}>{pag.nome}</button>
  )
}
