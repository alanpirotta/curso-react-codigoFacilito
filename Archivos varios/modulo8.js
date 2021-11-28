import React, { useEffect, useState } from "react";
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';


let Example = (props)=>{
    let [contador, setContador] = useState(0);
    useEffect(()=>{
        console.log('Cambiando')
    }, [])
    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={()=> setContador(contador +1)}>Sumar</button>
        </div>
    ) 
}

class App extends React.Component{
    static defaultProps = {
        name:'Alan',
        lastName: 'Pirotta'
    }

    static propTypes = {
        name: PropTypes.string //Hace que salte error si se le asigna un name que no sea String
    }

    constructor(props){
        super(props);
        this.state={
            contador: 0,
            updatedAt: null
        }
    }
/*
    componentDidMount(){
        console.log("Creado!");
        let intervalo = setInterval(()=> this.setState({contador: this.state.contador + 1 }),1000);

        this.setState({
            intv: intervalo
        })
    }

    componentDidUpdate(prevProps,prevState){
        console.log('State: ', prevState,this.state);
        console.log("props: ", prevProps,this.props);
        if(prevState.contador !== this.state.contador)
            this.setState({
                updatedAt: new Date()
            })
        console.log(this.state.updatedAt)
        console.log("Actualizado!");
    }

    getSnapshotBeforeUpdate(){
        console.log('Antes del DOM');
        return 3
        //Este retorno lo recibe como 3er argumento del componentDidUpdate
    }

    //Esto no funciona bien. Creo que era para componentWillMount, pero se va a deprecar asíque no importa
    componentWillUnount(){
        alert("Chau")
        clearInterval(this.state.intv);
    }
    */

    updateCounter= ()=>{
        this.setState({contador: this.state.contador +1})
    }

    render(){
        // console.log(this.props);
        // console.log(this);
        // console.log(this.state.contador)
        return (
            <div>
                <p>Contador: {this.state.contador}</p>
                <button onClick={this.updateCounter}  /*{()=> this.setState({contador: this.state.contador +1})}*/>Sumar</button>
            </div>
        )
    }
}


render(<App /*name={'Uriel'}*//>, document.getElementById('root'));
