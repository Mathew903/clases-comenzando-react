import propTypes from "prop-types"; //importamos propType
//import {AiFillBell} from 'react-icons/ai';

const Button = ({ value="click me" }) => {
  return (
      <button onClick={() => {
        console.log("holaaa")
      }} >
        {/* <AiFillBell /> */}
        {value}
      </button>
  );
};

//propTypes la forma en que le decimos a React de que tipo de dato o que dato queremos recibir como propiedad de nuestro componente
Button.propTypes = {
  value: propTypes.string.isRequired,
};

export default Button;
