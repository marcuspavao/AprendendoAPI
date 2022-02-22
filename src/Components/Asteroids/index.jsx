import React, { useState, useEffect } from 'react';
import './styles.css'

export default function Asteroids() {
    const [elements, setElements] = useState([])
    const [near, setNear] = useState([])
    const [next, setnext] = useState()
    /*     const [a, seta] = useState() */

    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=840xpNgE76ZLKdRaxSSDTTQyDi3dnGA5PBQcpUkC')
        .then(res => res.json())
        .then(asteroids => {
            setElements(asteroids.element_count)
            setNear(asteroids.near_earth_objects["2015-09-08"])
            setnext(asteroids.links.self)
        })
    }
    return (<div className='divimg'>
        {near && near.map(element => {
            return (
                <div key={element.id}>
                   {element.name}<hr></hr>
                    {element.id}<hr></hr>
                </div>
            )
        })}
        <p id="text1">{elements}</p>
        <p id="text1">{next}</p>
    </div>)
}
