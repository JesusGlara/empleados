"use client"
import  React, { useState } from 'react';

// Definición de la clase Nodo
class Nodo {
  public data: any;
  public derecha: Nodo | null;

  constructor(data: any) {
    this.data = data;
    this.derecha = null;
  }
}

const HomePage = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
    genero: ''
  });

  // Estado para almacenar la lista enlazada
  const [listaEnlazada, setListaEnlazada] = useState<Nodo | null>(null);

  // Función para manejar los cambios en los inputs del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nombre, edad, email, genero } = formData;
    
    // Crear un nuevo nodo con los datos del formulario
    const nodo = new Nodo({ nombre, edad, email, genero });
    
    // Insertar el nodo al final de la lista enlazada
    if (!listaEnlazada) {
      setListaEnlazada(nodo);
    } else {
      let temp = listaEnlazada;
      while (temp?.derecha !== null) {
        temp = temp.derecha;
      }
      temp.derecha = nodo;
    }
    
    // Restablecer los valores del formulario a vacío
    setFormData({
      nombre: '',
      edad: '',
      email: '',
      genero: ''
    });
  };

  // Función para imprimir la lista enlazada
  const imprimirListaEnlazada = () => {
    let temp = listaEnlazada;
    let valores = '';

    // Recorrer la lista enlazada y concatenar los valores de cada nodo
    while (temp !== null) {
      valores += `Nombre: ${temp.data.nombre}, Edad: ${temp.data.edad}, Email: ${temp.data.email}, Género: ${temp.data.genero}\n`;
      temp = temp.derecha;
    }
    
    // Mostrar una alerta con los valores de la lista enlazada
    alert(valores);
  };

  return (
    <main>
      <header className='bg-gradient-to-r from-pink-500 to-purple-500 p-4'>
        <p className='text-center text-2xl uppercase font-bold text-white'>Empleados</p>
      </header>

      <section className='flex flex-col items-center mt-8'>
        <form className='flex flex-col w-64 space-y-4 animate-fadeIn' onSubmit={handleSubmit}>
          <label className='uppercase text-xs text-purple-600'>Nombre</label>
          <input
            className='border py-2 px-3 focus:outline-none focus:ring-2 ring-purple-500'
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={formData.nombre}
            onChange={handleChange}
          />

          <label className='uppercase text-xs text-pink-600'>Edad</label>
          <input
            className='border py-2 px-3 focus:outline-none focus:ring-2 ring-pink-500'
            type='text'
            name='edad'
            placeholder='Edad'
            value={formData.edad}
            onChange={handleChange}
          />

          <label className='uppercase text-xs text-blue-600'>Email</label>
          <input
            className='border py-2 px-3 focus:outline-none focus:ring-2 ring-blue-500'
            type='text'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />

          <label className='uppercase text-xs text-green-600'>Género</label>
          <input
            className='border py-2 px-3 focus:outline-none focus:ring-2 ring-green-500'
            type='text'
            name='genero'
            placeholder='Género'
            value={formData.genero}
            onChange={handleChange}
          />

          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 transition-colors duration-300 ease-in-out transform hover:scale-105"
            type="submit"
          >
            Enviar
          </button>
        </form>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 transition-colors duration-300 ease-in-out transform hover:scale-105"
          onClick={imprimirListaEnlazada}
        >
          Imprimir Lista Enlazada
        </button>
      </section>
    </main>
  );
}

export default HomePage;
