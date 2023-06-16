import PropTypes from "prop-types"

const ListadoFrutas = ({frut, index}) => {

    return (
        <li key={index}>{frut}</li>
    )
}

ListadoFrutas.propTypes = {

    frut: PropTypes.string.isRequired,
    index: PropTypes.number

}

export default ListadoFrutas;