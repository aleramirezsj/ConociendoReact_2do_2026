export default function AccionesAlumno() {
  function mostrarAlertaAlumno() {
    console.log("Alumno: Juan Perez");
  };

  const mostrarAlertaEditar = () => {
    console.log("Editar Alumno: Juan Perez");
  } 

  const mostrarAlertaEliminar = () => {
    console.log("Eliminar Alumno: Juan Perez");
  }

  return (
    <>
        <h1>Acciones del Alumno</h1>
        <button onClick={mostrarAlertaAlumno}>Ver alumno</button>
        <br />
        <button onClick={mostrarAlertaEditar}>Editar alumno</button>
        <br />
        <button onClick={mostrarAlertaEliminar}>Eliminar alumno</button>
    </>
  );
}