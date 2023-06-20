import { useState } from "react";

const Controlado = () => {
    /*
        const [title, setTitle] = useState('');
        const [description, setDesciption] = useState('');
        const [estado, setEstado] = useState('pendiente');
    */

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        estado: 'completado',
        priority: false
    })

    const {title, description, estado, priority} = todo;
    const handleSubmit = (event) => {
        event.preventDefault();
        
    };

    const handleChange = (event) =>{
        const {type, name, value, checked} = event.target;
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (        

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="ingrese texto" className="form-control mb-2" name="title" value={title} onChange={handleChange}/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descipcion" name="description" value={description} onChange={handleChange}/>
            <div className="form-check mb-2">
                <input type="checkbox" name="priority" className="form-check-input" id="inputCheckbox" checked={priority} onChange={handleChange}/>
                <label htmlFor="inputCheck">Dar Prioridad</label>
            </div>
            <select className="form-select mb-2" name="estado" value={estado} onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default Controlado;