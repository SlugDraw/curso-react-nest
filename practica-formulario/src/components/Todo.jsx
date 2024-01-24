import PropTypes from "prop-types"

const Todo = ({ todo, deleteTodo, updateTodo }) => {

    const {id, title, description, state, priority} = todo;

    return(
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${state && 'text-decoration-line-through'}`}>{description}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-danger" onClick={ () => deleteTodo(id) }>Eliminar</button>
                        <button className="btn btn-sm btn-success" onClick={ () => updateTodo(id) }>Actualizar</button>
                    </div>
                </div>
                <span className="badge text-bg-warning">{priority && 'Prioritario'}</span>
            </div>
        </li>
    );
}

Todo.propTypes= {
    todo: PropTypes.object,
    deleteTodo: PropTypes.array,
    updateTodo: PropTypes.array
}

export default Todo;