import React/*, { useState, useEffect, Suspense }*/ from "react";
import { render } from 'react-dom';
// import Button from "./Button";
// import Card from "./Card";
import Form from './Form';
import './index.css';

/*
const themes = {
    'dark':{
        backgroundColor: 'black',
        color: 'white'
    },
    'light':{
        backgroundColor: 'white',
        color: 'black'
    }
}

export const ThemeContext = React.createContext();
*/



function App() {
    /*
    const [theme, setTheme] = useState(themes.dark);
    const modo = theme === themes.dark ? 'Modo claro' : 'Modo oscuro';
    */

    return (
        <div>
            {/* <ThemeContext.Provider value={ theme }>
                <Button />
                <Card />
                <button onClick= {()=> theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)} >{ modo }</button>
            </ThemeContext.Provider> */}
            <Form />
        </div>
    )
}


render(<App />, document.getElementById('root'));