//import {componente} from 'ruta' exportamos algun componente de los que hay en el archivo componente.
import ReactDOM from "react-dom/client";
import App from "./App"; //!importamos una funcion o componente
import "./index.css";

//*Creamos una ruta raiz, donde le diremos a react donde desplegaremos nuestra aplicacion
const root = ReactDOM.createRoot(document.getElementById("root"));

/* render
* root.render(elemento hijo) Usamos el metodo render de root, donde le diremos que elemento hijo colocaremos, en pocas palabras, le estamos diciendo que vamos a renderizar nuestra aplicacion ahi o que esa va a ser nuestra aplicacion que veremos
    root.render(<h1>hola mundo</h1>);
                    o
    root.render(<App />); 
    
TODO: Mayor mente colocamos nuestra aplicacion en un componente llamado: App y en el archivo index colocamos las configuracion o declaramos el inicio de nuestra app.
*/
root.render(<App />);
