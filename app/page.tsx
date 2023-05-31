"use client"
import  React, { useState } from 'react';


const HomePage = () => {
  const[nombre,setNombre]=useState('');
const[edad,setEdad]=useState('');
const[correo,setCorreo]=useState('');
const[genero,setGenero]=useState('');
const[mensaje,setMensaje]=useState('');

function capturar(){

  setMensaje(nombre+
    '\n'+edad+
    '\n'+correo+
    '\n'+genero);
 
}
const formHandler = (e:any) =>{
  e.preventDefault();
  capturar();
}

  return (
    <main>
      <header className='bg-gradient-to-r from-pink-500 to-purple-500 p-4'>
        <p className='text-center text-2xl uppercase font-bold text-white'>Empleados</p>
      </header>

      <section className='flex flex-col items-center mt-8'>
        <form className='flex flex-col w-64 space-y-4 animate-fadeIn' onSubmit={formHandler}>
          <label className='uppercase text-xs text-purple-600'>Nombre</label>
          <input className='border py-2 px-3 focus:outline-none focus:ring-2 ring-purple-500' type='text' placeholder='Nombre' value={(nombre)} onChange={(event)=> setNombre(event.target.value)} />

          <label className='uppercase text-xs text-pink-600'>Edad</label>
          <input className='border py-2 px-3 focus:outline-none focus:ring-2 ring-pink-500' type='text' placeholder='Edad' value={(edad)} onChange={(event)=> setEdad(event.target.value)} />

          <label className='uppercase text-xs text-blue-600'>Email</label>
          <input className='border py-2 px-3 focus:outline-none focus:ring-2 ring-blue-500' type='text' placeholder='Email' value={(correo)} onChange={(event)=> setCorreo(event.target.value)} />

          <label className='uppercase text-xs text-green-600'>Género</label>
          <input className='border py-2 px-3 focus:outline-none focus:ring-2 ring-green-500' type='text' placeholder='Género' value={(genero)} onChange={(event)=> setGenero(event.target.value)} />
        </form>

        <button onClick={capturar} className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 transition-colors duration-300 ease-in-out transform hover:scale-105">
          capturar
        </button>
        <p>{mensaje}</p>
      </section>
    </main>
  );
}

export default HomePage