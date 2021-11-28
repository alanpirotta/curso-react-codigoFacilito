//codeSplitting
import React, { useState, useEffect, Suspense } from "react";
import { render } from 'react-dom';
import './index.css';
const Surprise = React.lazy( ()=> import('./Surprise') );
// import hello from "./hello";  //Si quiero traerlo sin codeSplitting

function App() {
    const [showSurprise, setShowSurprise] = useState(false);

    return (
        <div>
            <Suspense fallback={ <p>Cargando...</p>}>
                <button onClick={ (ev)=> setShowSurprise(true)}>Mostrar sorpresa</button>
                {
                    showSurprise && <Surprise />
                }
            </Suspense>
        </div>
    )
}


render(<App />, document.getElementById('root'));
