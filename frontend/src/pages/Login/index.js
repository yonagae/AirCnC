import React, { useState } from 'react'
import api from '../../services/api'

export default function Login({ history }){
    const [email, setEmail] = useState('');

    async function handleSbumit(event){
    event.preventDefault(); /* para não atualziar a tela mandando*/

     const response =  await api.post('/sessions', {
      email : email
     })

   const { _id } = response.data;

   localStorage.setItem('user', _id);

   history.push('/dashboard');

  }

  return (
        <>
        <p>
          Ofereça <strong> spots </strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
        </p>
        <form onSubmit={handleSbumit}>
          <label htmlFor="email">E-mail *</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={event=> setEmail(event.target.value)} /* está criando a função de setar o email*/
            />
         <button className="btn" type="submit">Entrar</button>
        </form>
        </>
    )
}