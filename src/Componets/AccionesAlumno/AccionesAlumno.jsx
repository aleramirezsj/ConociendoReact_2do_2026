import { useState } from "react";
export default function AccionesAlumno() {
  const [mostrarTexto, setMostrarTexto] = useState(true);
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
        {mostrarTexto && <h1>Acciones del Alumno</h1>}
        <button onClick={mostrarAlertaAlumno}>Ver alumno</button>
        <br />
        <button onClick={mostrarAlertaEditar}>Editar alumno</button>
        <br />
        <button onClick={mostrarAlertaEliminar}>Eliminar alumno</button>
        <br />
        <label htmlFor="mostrarTexto">Mostrar Texto:</label>
        <input type="checkbox" id="mostrarTexto" name="mostrarTexto" checked={mostrarTexto}
          onChange={(evento) => setMostrarTexto(evento.target.checked)}
        />
    </>
  );
}