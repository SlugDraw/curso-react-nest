import PropTypes from "prop-types"

const WelcomeText = ({texto}) => {

    return (
        <div>
            <h3>{texto}</h3>
        </div>
    )

}

WelcomeText.propTypes = {
    texto: PropTypes.string.isRequired
}

export default WelcomeText;