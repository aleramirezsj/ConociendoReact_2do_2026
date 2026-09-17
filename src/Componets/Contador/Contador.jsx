import { useState } from 'react'

export default function Contador() {
  const [numero, setNumero] = useState(10)

  function incrementar() {
    setNumero(numero + 1)
    console.log(numero)
  }

  return (
    <>
      <p>{numero}</p>
      <button onClick={incrementar}>Incrementar</button>
    </>
  )
}