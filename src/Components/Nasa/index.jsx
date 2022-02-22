import React, { useState, useEffect } from 'react';

export default function Nasa() {
    const [results1, setResults] = useState([])
    /* const [element, setElement] = useState([]) */

    useEffect(() => {
        loadData()
    })

    function loadData() {
        fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=Lz36BtMfbGb9wMT0yMxc73WNx7A8XcC7Uant2sfY')
            .then(res => res.json())
            .then(res => {
                setResults(res.results)
            })
    }
    return (
        <div className='divimg'>
            {results1 && results1.map(element => {
                return (
                    <div key={element[1]}>
                        {element[0]}
                    </div>
                )
            })}
        </div>)
}
