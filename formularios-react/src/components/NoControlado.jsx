import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(form.current);
        const {title, description, estado} = Object.fromEntries([...data.entries()]);
        console.log(title, description, estado);
        
    };

    return (        

        <form onSubmit={handleSubmit} ref={form}>

            <input type="text" placeholder="ingrese texto" className="form-control mb-2" name="title"/>
            <textarea className="form-control mb-2" placeholder="Ingrese Descipcion" name="description"/>
            <select className="form-select mb-2" name="estado">
                <option value="pendiente">Pendiente</option>
                <option value="completado" selected>Completado</option>
            </select>

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default NoControlado;