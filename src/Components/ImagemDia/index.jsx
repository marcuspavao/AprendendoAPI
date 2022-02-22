import React, { useState, useEffect } from 'react';
import './styles.css'

export default function ImagemDia(props) {
    const [imagem, setImagem] = useState()
    const [date, setDate] = useState()
    const [explanation, setExplanation] = useState()
    const [title, setTitle] = useState()

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Lz36BtMfbGb9wMT0yMxc73WNx7A8XcC7Uant2sfY')
            .then(res => res.json())
            .then(fotododia => {
                setImagem(fotododia.hdurl)
                setDate(fotododia.date)
                setExplanation(fotododia.explanation)
                setTitle(fotododia.title)
            })
    })
    if (props.show == 1) {
        return (<div className='divimg'>
            <p id="text1">{title}</p>
            {/* <img src={imagem} className='Imagem' /> */}
            <img src={imagem} className='Imagem' />
            <p id="text">{explanation}</p>
            <p id="text">{date}</p>
        </div>)
    } else {
        return (null)
    }
}
