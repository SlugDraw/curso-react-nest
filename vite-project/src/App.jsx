import imagen from './assets/img/609-200x300.jpg'
import MyButton from './Components/MyButton'
import WelcomeText from './Components/WelcomeText'
import ItemFrut from './Components/ItemFrut'
import ButtonState from './Components/ButtonState'

const frutas = ['manzana', 'platano', 'pera', 'naranja']

const App = () =>  {

    const title = "Titulo Hola Mundo";
    const user = true;

    return(
        <>
            <ButtonState />
            <h1 className="centrado">{title}</h1>
            <img src={imagen} alt="" />
            <MyButton  text="Submit" edad={20}/>
            <WelcomeText texto = {user ? 'Online' : 'Offline'} />
            <ItemFrut array={frutas}/>
        </>
    );

};

export default App;