import PropTypes from "prop-types"

const MyButton =  ({text, edad}) => {

    const evento = (title) => {
        console.log(`click boton ${title}`);
    }

    return(
        <button onClick={() => evento(text)}>{text} - {edad}</button>
    )
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

export default MyButton;