import PropTypes from "prop-types"
import ListadoFrutas from "./ListadoFrutas";

const ItemFrut = ({array}) => {

    return(
        <ul>
            {
                array.map((fruta, index) => (
                    <ListadoFrutas frut={fruta} key={index}/>
                ))
            }
        </ul>
    )

}

ItemFrut.propTypes = {
    array: PropTypes.array.isRequired
}

export default ItemFrut;