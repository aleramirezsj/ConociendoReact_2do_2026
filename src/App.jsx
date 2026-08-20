import Titulo from './Componets/Titulo/Titulo.jsx'
import TodoCounter from './Componets/TodoCounter/TodoCounter.jsx'

export default function App() {
  return (
    <>
      <Titulo text="Creando mi primera app en React" />
      <TodoCounter totalTodos={5} completedTodos={2} />
    </>
  )
}