import "./tareas.css";

const Tareas = ({listo}) => {
  return (
    <div className="container">
      <h1 className="title">Titulo de tarea</h1>
      <p className={listo ? "bg-green" : "bg-red"} >Mi primera tarea</p>
    </div>
  );
};

export default Tareas;
