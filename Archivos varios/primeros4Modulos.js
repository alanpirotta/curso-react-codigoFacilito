import React, { Component , useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import './index.css';


// const Boton = ()=>{
//     return React.createElement('button',{
//         onClick: ()=> alert('Estoy vivooo!!')
//     },'Enviar');
// }

//Alternativa con JSX
/*
const Boton = ()=> <button onClick={ ()=> alert('Yo si vivo!') }>Enviar</button>

const App = ()=>{
    return <Boton />
}
*/

/*
function CrearDiferenteBoton({opcion}){
    if (opcion == "1"){
        return React.createElement('button',{
                    onClick: ()=> alert('Estoy vivooo!!')
                },'Enviar');
    }else{
        return React.createElement('button',{
            onClick: ()=> alert('Soy otro botón!!')
        },'envío alt');
    }
}


const App = ()=>{
    return <CrearDiferenteBoton opcion="2" />
}
//No puedo usar el número directo, acepta sólo strings?
*/

//Prueba de un ciclo que genera una lista
/*
const nombres = [
    'Alan',
    'Daniela',
    'Chandler',
    'lira'
]

function getNombres(){
    const elementosLista = [];
    for (let i = 0; i<nombres.length; i++){
        elementosLista.push(<li class='nombres'>{nombres[i]}</li>)
    }
    return elementosLista;
}

const Nombres = ()=>{
    return <ul id="listaNombres">{getNombres()}</ul>
}

const App = ()=>{
    return <div><Nombres /></div>
}
*/

//Con map
/*
const nombres = [
    'Alan',
    'Daniela',
    'Chandler',
    'lira'
]

const Nombres = ()=>{
    return <ul id="listaNombres">{
        nombres.map( (nombre,index) => <li key={index }className='nombres'>{nombre}</li>)
    }</ul>
}

const App = ()=>{
    return <div><Nombres /></div>
}
*/

//COMPONENTES
/*
class App extends Component{
    render(){
        return <h1>Soy una clase</h1>
    }
}
*/
/*
const nombres = [
    'Alan',
    'Daniela',
    'Chandler',
    'lira'
]

// const Saludar = (props)=>{
//     return <span>Hola {props.nombre}</span>
// }

//Destructuring permite cambiar el props por la variable del componente padre

const Saludar = ({ nombre, idioma = 'en' })=>{       
    const saludo = idioma === 'es' ? 'Hola' : 'Hello';
    return <p>{saludo} {nombre}</p>
}

//Alternativa para definir default. Se va a deprecar
// Saludar.defaultProps = {
//     idioma: 'en'
// }

const App = ()=>{
    return <div><Saludar nombre='Alan' idioma='es' /></div>
}
*/

//ESTADOS
/*
const Button = ()=>{
    //creo un hook (se importa específicamente)
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>Presionado: { counter }</p>
            <button onClick={ ()=> setCounter(counter+1)}>Click me!</button>
        </div>
    )
}

const App =()=>{
    return <div><Button /></div>
}
*/
/*
const Button = ()=>{
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log('Me ejecuté')
    });  //Si agrego como segundo argumento un [], se ejecuta solo cuando se cumple el array ese. Si se pasa array vacío, se ejecuta sólo al iniciar. Si se agrega un return, se hace cuando se elimina el componente
    return (
        <div>
            <p>Presionado: { counter }</p>
            <button onClick={ ()=> setCounter(counter+1)}>Click me!</button>
        </div>
    )    
}

const App =()=>{
    return <div><Button /></div>
}
*/
/*
const Saludo = ()=>{
    const [name, setName] = useState("");
    return(
        <div>
            {// SyntheticEvent}
            <input type="text" onChange={ (ev)=> setName(ev.target.value) } />
            <p>Hola {name}</p>
        </div>
    )
}

const App =()=>{
    return <div><Saludo /></div>
}
*/

const Form =({ showed })=>{
    let [title,setTitle] = useState("");
    let [body,setBody] = useState("");

    const firstInput = useRef();

    useEffect(()=>{
        //Actualizar el DOM
        if(showed){
            console.log(firstInput);
            firstInput.current.focus(); //Manda el focus a donde quiero
        }
    },[showed])

    const sendForm = (ev)=>{
        ev.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            setTitle('');
            setBody('');
            console.log(json)
        })
    }

    return(
        <form onSubmit={(ev)=> sendForm(ev)}>
            <div>
                <label htmlFor='title'>Título </label>
                <input type='text' value={title} id='title' onChange={ (ev)=> setTitle(ev.target.value)} ref={firstInput} /> 
            </div>
            <div>
                <label htmlFor='body'>Publicación </label>
                <input type='text' value={body} id='body' onChange={ (ev)=> setBody(ev.target.value)} /> 
            </div>
            <input type='submit' value='Enviar' />
        </form>
    )
}

const Accordion =()=>{
    const [show,setShow]= useState(false);
    return (
        <div>
            <button onClick={()=> show===false ? setShow(true) : setShow(false)}>Mostrar formulario</button>
            {show && <Form showed = {show} />}
        </div>
    )
}

const App =()=>{
    return <div><Accordion /></div>;
}

render(<App />, document.getElementById('root'));
