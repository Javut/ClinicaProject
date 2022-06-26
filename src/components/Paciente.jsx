import React from 'react'

export const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Jaider</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Acompañante: {''}
                <span className="font-normal normal-case">Shirly</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">javut2010@hotmail.com</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Alta: {''}
                <span className="font-normal normal-case">10 de Diciembre</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ratione numquam quas eum alias tenetur quam, beatae eveniet atque dolorem harum delectus
                    omnis, nam maiores iure ipsum, ducimus impedit tempore dolore.</span>
            </p>
        </div>
    )
}
