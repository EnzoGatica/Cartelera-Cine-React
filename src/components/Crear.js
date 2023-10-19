import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });

    const {titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault(); // evita el refresco de la pagina con el enviar del formulario
        // Conseguir los datos

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //crear objeto
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        // guardar estado
        setPeliState(peli);

        //Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli];
        })

        //guardar en el almacenamiento local
        GuardarEnStorage("pelis",peli)

        //localStorage.setItem('pelis', JSON.stringify([peli])); //stringify convierte el array en una cadena de string
        
    }

    
  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>
            {(titulo && descripcion) && "Has creado la pelicula "+peliState.titulo}
        </strong>
        

        <form onSubmit={conseguirDatosForm}>
            <input type="text" 
                    id="titulo" 
                    name='titulo'
                    placeholder="Titulo"
                     />
            <textarea 
                    id="descripcion" 
                    name='descripcion'
                    placeholder="Descripción"></textarea>
            <input type="submit" 
                    id="save" 
                    value="Guardar" />
        </form>
    </div>
  )
}
