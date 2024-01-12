import React, {useState} from "react";

const Contador= () =>{
    const [contador, setContador] = useState(0);

    const Incrementador = () =>{
        setContador(contador + 1);
    };

    return (
        <div className="container">
                <h1 className="titulo">Contador: {contador}</h1>
                <button onClick={Incrementador}>Incrementar</button>
        </div>
    );
};
export default Contador;