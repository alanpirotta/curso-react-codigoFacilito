import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
    const context = useContext(FormContext);
    return (
        <div>
            <label htmlFor='email'>Email:</label>
            <input 
                onChange={(ev)=> context.setEmail(ev.target.value)}
                type='email' 
                id='email' 
                value={context.email}/>
            <label htmlFor='password'>Contraseña:</label>
            <input 
                onChange={(ev)=> context.setPassword (ev.target.value)}
                type='password' 
                id='password' 
                value={context.password} />
        </div>
    )
}