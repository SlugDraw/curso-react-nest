import { useState } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types"


const Formulario = ({ addTodo }) => {
    
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        state: 'completado',
        priority: false
    })

    const {title, description, state, priority} = todo;

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validar()){
            return;
            
        }

        addTodo({
            id: Date.now(),
            ...todo,
            estado: state === 'completado' 

        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha agregado la tarea con exito',
            showConfirmButton: false,
            timer: 1500
        })
        
    };

    const handleChange = (event) =>{
        
        const {type, name, value, checked} = event.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const validar = () => {

        let retorno = true;

        if(!title.trim() || !description.trim()){
            Swal.fire({
                icon: 'error',
                title: 'Campo vacio',
                text: 'Los campos de titulo y descripcion son obligatorios'
            })
            retorno = false;
        }

        return retorno;
    }

    return (        

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="ingrese texto" className="form-control mb-2" name="title" value={title} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descipcion" name="description" value={description} onChange={handleChange}/>
            <div className="form-check mb-2">
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheckbox" checked={priority} onChange={handleChange}/>
                <label htmlFor="inputCheck">Dar Prioridad</label>
            </div>
            <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

Formulario.propTypes = {
    addTodo: PropTypes.array
}

export default Formulario;