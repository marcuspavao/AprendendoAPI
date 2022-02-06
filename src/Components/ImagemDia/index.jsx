import React, { useState, useEffect } from 'react';
import './styles.css'

export default function ImagemDia(props) {
    const [imagem, setImagem] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Lz36BtMfbGb9wMT0yMxc73WNx7A8XcC7Uant2sfY')
            .then(res => res.json())
            .then(fotododia => {
                setImagem(fotododia.hdurl)
            })
    })
    if (props.show == 1) {
        return (<div className='divimg'>
            <img src={imagem} className='Imagem' />
        </div>)
    } else {
        return (<h1>VAI TOMAR NO CU PORRA CARALHO</h1>)
    }
}
