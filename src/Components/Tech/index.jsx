import React, { useState, useEffect } from 'react';

export default function Tech() {
    const [results1, setResults] = useState([])
    /* const [element, setElement] = useState([]) */

    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setResults(res)
            })
    }
    return (
        <div className='divimg'>
            {results1 && results1.map(element => {
                return (
                    <div key={element.id}>
                        {element.title}
                    </div>
                )
            })}
        </div>)
}
