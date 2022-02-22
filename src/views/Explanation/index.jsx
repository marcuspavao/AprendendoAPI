import Asteroids from "../../Components/Asteroids"
import Nasa from "../../Components/Nasa"
import Tech from "../../Components/Tech"
import NavigateButton from "../../Components/NavigateButton"
import Header from "../../Components/Header"

export default function Explanation() {
    return (
        <>
        <Header />
        <div className="App">
            <Nasa />
            <hr />
            <Asteroids />
        </div>
        </>
    )
}
