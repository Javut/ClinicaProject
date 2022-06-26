import React from 'react'

export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded py-10 px-5 mb-10">

        <div className="mb-5">
          <label htmlFor="paciente" className="block text-gray-700 uppercase font-bold">
            Nombre paciente
          </label>
          <input
            id="paciente"
            type="text"
            placeholder="Nombre del paciente"
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="acompañante" className="block text-gray-700 uppercase font-bold">
            Nombre acudiente/acompañante
          </label>
          <input
            id="acompañante"
            type="text"
            placeholder="Nombre del Acompañante"
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-red-400 rounded-md"
            placeholder="Describe los sintomas"
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-all"
          value="Agregar Paciente"
        
        />

      </form>
    </div>
  )
}
