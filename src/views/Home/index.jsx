import ImagemDia from "../../Components/ImagemDia";
import SearchButton from "../../Components/SearchButton";
import React, { useState } from 'react';
import NavigateButton from "../../Components/NavigateButton";
import Header from "../../Components/Header";

function Home() {
    const [count, setCount] = useState(0);
    return (
        <>
        <Header />
        <div className="App">
            <p>{(count == 0 ? 'Não Mostrando Nada' : '')}</p>
            <SearchButton count={count} setCount={setCount} />
            <ImagemDia show={count} />
        </div>
        </>
    )
}
export default Home