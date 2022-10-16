const Saludo = ({ nombre, casado, dinero, direccion }) => {
	return (
		<>
			<p>Hola {nombre} </p>
			<p>Casado: {casado ? "SI" : "NO"} </p>
			<span>💲{dinero}</span>
			<ul>
				Direccion:
				<li> {direccion.calle} </li>
				<li> {direccion.numero} </li>
				<li> {direccion.ciudad} </li>
			</ul>
		</>
	);
};

export default Saludo; //exportamos nuestro componente como default o de forma predeterminada
//export const Saludo... exportamos nuestro componente como forma denominada