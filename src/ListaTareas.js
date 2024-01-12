import React, { useEffect, useState } from "react";
const ListaTareas = () => {

    const storeTareas=JSON.parse(localStorage.getItem("tareas")) || [];
    const [tareas, setTareas] = useState(storeTareas);
    const [nuevaTarea, setNuevaTarea] = useState("");

    useEffect (() =>{
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== "") {  {/* me fijo que no este vacio el input */}
            setTareas([...tareas, { texto: nuevaTarea, completada: false }]); {/* creo el objeto tareas, contiene 2 propiedades, texto que proviene de nueva tarea y completada en false  */}
            setNuevaTarea("");
        }
    };

    const marcarComoCompletada = (index) => {
        const nuevasTareas = [...tareas];{/*  creo el objeto tareas */}
        nuevasTareas[index].completada = !nuevasTareas[index].completada;{/*  negamos el valor actual si es true lo cambia a false*/}
        setTareas(nuevasTareas);{/* al array set tarea le agrego las nuevasTareas */}
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];{/*  creo el objeto tareas */}
        nuevasTareas.splice(index, 1);{/* al array le elimino la ultima posicion */}
        setTareas(nuevasTareas); {/* al array set tarea le agrego las nuevasTareas */}
    };

    return (
        <div className="container">
            <div className="container-titulo">
                <h1>Lista de Tareas</h1>
            </div> 
            <div className="container-tareas">
                <ul>
                    {tareas.map((tarea, index) => (
                    <li key={index} className={tarea.completada ? "completada" : ""}>
                        {tarea.texto}
                        <button onClick={() => marcarComoCompletada(index)}>
                        {tarea.completada ? "Desmarcar" : "Marcar"}
                        </button>
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>))}
                </ul>
            <div>
                <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}/>
                <button onClick={agregarTarea}>Agregar Tarea</button>
            </div>
            </div>
        </div>
        );
    };
export default ListaTareas;
