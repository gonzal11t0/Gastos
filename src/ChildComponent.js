import React from "react";

const ChildComponent = (props) => { 
    return (
        <div>
            <h1>Componente hijo</h1>
            <p>Datos desde el padre {props.dataFromParent}</p>
        </div>
    );
}

export default ChildComponent;