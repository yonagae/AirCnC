import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(()=>{
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers : { user_id }
            });

            setSpots(response.data)
        }      
       
        loadSpots();
    }, []); // array vazio indica que vai executar uma unica vez, mas se colocar alguma variavel, toda vez que ela for modificada a função será chamada
   
    return (
        <>
        <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{backgroundImage: `url(${spot.thumbnail_url})`}} />
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$${spot.price}/dia` : 'Gratuiro'}</span>
                </li>
            ))}
        </ul>
        </>
    )
}