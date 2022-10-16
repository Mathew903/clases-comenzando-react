//import Saludo from "./components/Saludo";
// import Button from "./components/Button";
// import Tareas from "./components/Tareas";
// import {Mensaje} from "./components/Mensaje";
// import Post from "./components/Post";
import { useState, useEffect } from "react";

//Declaracion de nuestra funcion o componente

/*
const Contador = () => {
  const numero = 0;
  const [state, setState] = useState(numero);
  return (
    <div>
      <h2>Contador: {state}</h2>
      <button onClick={() => setState(state + 1)}>Incrementar</button>
      <button onClick={() => setState(0)}>Resetear</button>
      <button onClick={() => setState(state - 1)}>Decrementar</button>
    </div>
  );
};
*/
const App = () => {
  /*const handleChange = (e) => {
		console.log(e.target.value)
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("enviando...")
	}*/
	const [clicks, setClicks] = useState({right: 0, left: 0});
	const [mensaje, setMensaje] = useState("");

	let cantClicks = clicks.right + clicks.left

	const getData = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts")
		const data = await res.json();
		console.log(data)
	}

	useEffect(() => {
		getData()
	}, [])
	
  //Retornamos nuestro JSX, interfaz del componente o cuerpo 
  return (
    <>
    <h1 style={{ color: "red" }}>{cantClicks}</h1>
    <h2 style={{ color: "red" }}>{mensaje}</h2>
	{/* <Contador /> */}

	<input type="text" onChange={(e) => setMensaje(e.target.value)}/>
	{/* <input type="text" onChange={(e) => setValor(e.target.value)}/> */}
	<hr />
	{clicks.left}
	<button onClick={() => setClicks({...clicks, left: clicks.left + 1, cantClicks: clicks.cantClicks + 1})}>left</button>
	{/* <button onClick={() => setClicks({...clicks, right: clicks.right + 1, cantClicks: clicks.cantClicks + 1})}>right</button>
	{clicks.right} */}
    </>
  );
};

export default App; //exportamos un unico componente o funcion
//export const componente; exportamos mas de 1 componente
