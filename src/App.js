import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {tareas} from './tareas.json';
import FormularioTareas from './FormularioTareas';
console.log(tareas);



class App extends Component {
  constructor(){
    super();
    this.state = {
      tareas

    };

    this.handleAddTareas = this.handleAddTareas.bind(this);

  }

  handleAddTareas(tareas){
    this.setState({

      tareas: [...this.state.tareas, tareas]
    })
  }

  removeTarea(index){

    if(window.confirm('Estas seguro de eliminar la tarea')){
      this.setState({
        tareas: this.state.tareas.filter((e, i)=>{
            return i != index
        })

      })


    }

  }

  render() {

    const tareas = this.state.tareas.map((tarea,i) =>{
      return(
      <div className="col-md-4" key={i}>
      <div className="card mt-4">
        <div className="card-header">
        <h3>{tarea.title}</h3>
        <span className="badge badge-pill badge-danger ml-2">
        {tarea.priority} </span>
        </div>
        <div className="card-body">
        <p>{tarea.description} </p>
        <p><mark>{tarea.responsible}</mark> </p>
        </div>
        <div className="card-footer">
        <button className="btn btn-danger" onClick={this.removeTarea.bind(this, i)}>
        Borrar
        </button>
        </div>

      </div>

      </div>
      )


    })
    return (
      <div className="App">

      <nav className="navbar navbar-light bg-light">
        <a href="#">
          Tareas
          <span className="badge badge-pill badge-danger ml-2">
          {this.state.tareas.length}

          </span>
        </a>
      </nav>

      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
          <img src={logo} className="App-logo" alt="logo" />
          <FormularioTareas onAddTodo={this.handleAddTareas} />

        </div>
        <div className="col-md-9">
          <div className="row">
            {tareas}

          </div>
          </div>
          </div>
          </div>

      </div>
    );
  }
}

export default App;
