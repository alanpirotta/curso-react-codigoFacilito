import React, { useEffect } from "react";

export default (props) => {
    //carga el hello.js SOLO al mostrar la sorpresa
    useEffect(()=>{
            import("./hello").then( mod => mod.default());  
    })
    
    return (
        <div>
            <p>
                BOOOH!!
            </p>
        </div>
    )
}