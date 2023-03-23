import React, { useState } from 'react';

export default function Contador() {
    const[contador, setContador]=useState(0);
    
    const sumar = () => setContador (contador+1);
    const restar = ()=> setContador (contador-1);
    const reset = () => setContador(0)

    return (
        <div style={{textAlign:"center"}}>
            <h1>Use State Counter</h1>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <button onClick={reset}>reset</button>
            </nav>
            <h3>{contador}</h3>
        </div>
    );
};

