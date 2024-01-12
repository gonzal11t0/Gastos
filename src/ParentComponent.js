import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent =()=>{
    const [parenState] = useState("Estos datos son del estado padre");
    return(
        <div>
            <h2>Componente padre </h2>
            <p>Estado del padre: {parenState}</p>
            <ChildComponent dataFromParent={parenState}/>
        </div>
    );
};

export default ParentComponent;

