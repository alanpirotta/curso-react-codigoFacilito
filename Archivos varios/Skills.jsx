import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
    const addToList = (value, list)=>{
        console.log(":0");
        context.setSkills([value].concat(context.skills))
    }
    const removeFromList = (value, list)=> context.setSkills(context.skills.filter(v => v != value))
    const context = useContext(FormContext);
    return (
        <div className='skills'>
            {/* Es para probar de poner en diferentes componentes, no es necesario en este caso */}
            <p>Email: {context.email}</p>   
            <label>
                <input
                    onChange={(ev)=> ev.target.checked ? addToList('Ruby') :removeFromList('Ruby')}
                    type='checkbox'
                    name='likes[]' />
            Ruby
            </label>
            <label>
                <input
                    onChange={(ev)=> ev.target.checked ? addToList('JavaScript') :removeFromList('JavaScript')}
                    type='checkbox'
                    name='likes[]' />
            JavaScript
            </label>
        </div>
    )
}