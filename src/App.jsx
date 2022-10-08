//import Saludo from "./components/Saludo"; 
import Button from "./components/Button";

//Declaracion de nuestra funcion o componente
const App = () => {
	/* declaracion de tipos de datos, forma de usarlos en jsx y su manipulacion
		const nombre = "Matias"

		const obj = {
			name:"matias",
			edad: 18
		}

		const juegos = ["Call of Duty", "Fornite", "Free Fire"]

		const num = 123123;
	*/

	//Retornamos nuestro JSX, interfaz del componente o cuerpo
	return (
		<>
			{/* Esta es la forma de crear comentarios en componentes */}
			{/* {con las llaves, lo que le estamos diciendo a React es que vamos a interpretar logica js}  

				{variable}
				{condiciones}
				{bucles}

				{nombre} => aca le estamos diciendo que el valor va a ser de la variable "nombre"
				nombre => esto es un texto normal, un string cualquiera
				
				Ejemplo: 

				<h1>{obj.name}</h1>
				<p>{obj.edad}</p>
				<p>{12312312}</p>
				<p>{juegos[0]}</p>
			
			*/}

			{/* 
			
				Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.

				Conceptualmente, los componentes son como las funciones de JavaScript. Aceptan entradas arbitrarias (llamadas “props”) y retornan elementos de React que describen lo que debe aparecer en la pantalla.

				La forma más sencilla de definir un componente es escribir una función de JavaScript:

				function Welcome(props){
					return <h1>Hello, {props.name}</h1>;
				}

				Nota: Comienza siempre los nombres de componentes con una letra mayúscula.
				React trata los componentes que empiezan con letras minúsculas como etiquetas del DOM. Por ejemplo, <div /> representa una etiqueta div HTML pero <Welcome /> representa un componente y requiere que Welcome esté definido.

				A los componentes tambien se les puede pasar o crear propiedades para poder trabajr con ciertos valores o datos, como tambien para modificar ciertos datos o reutilizarlos para un determinado fin. Ejemplo:
			
				<Saludo 
					nombre="Matias" 
					casado={false} 
					dinero={20000} 
					direccion={{calle: "Lima", numero: 1323, ciudad: "Buenos aires"}}
				/> 

				De esta manera nosotros podemos pasarle muchas propiedades y poder con un mismo componente manipular muchas datos, reutilizando esta logica.
			*/}


			<Button color="#cc4" fontSize="14" value="click me" />
			<Button color="#5fc" fontSize="20" value="apretame" />
			<Button color="#f41" fontSize="17" value="presioname" />
			<Button />
		</>
	);
};

export default App; //exportamos un unico componente o funcion
//export const componente; exportamos mas de 1 componente
