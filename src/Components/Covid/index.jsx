import React, { useState, useEffect } from 'react';

export default function Covid() {
    const [cases, setCases] = useState([])
    const [near, setNear] = useState([])
    const [next, setnext] = useState()
/*     const [a, seta] = useState() */

    useEffect(() => {
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
            .then(res => res.json())
            .then(cases => {                
                setCases(cases.Brazil.All.confirmed) 
                
            })
    })

    return (<div className='divimg'>
        <p id="text1">{cases}</p>
    </div>)
}
