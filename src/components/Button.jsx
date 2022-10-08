import propTypes from "prop-types"; //importamos propType

const Button = ({ color = "#fff", fontSize="16", value="click me" }) => {
  return (
      <button style={{background: "#ffff", color: "#000",  fontSize, cursor: "pointer"}}> {value} </button>
  );
};

//propTypes la forma en que le decimos a React de que tipo de dato o que dato queremos recibir como propiedad de nuestro componente
Button.propTypes = {
  value: propTypes.string,
  color: propTypes.string,
  fontSize: propTypes.string
};

export default Button;
