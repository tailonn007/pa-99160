import { useState } from 'react'
import './App.css'
import InfoAluno from './components/Infoaluno/InfoAluno'
import InfoCurso from './components/Infoaluno/InfoCurso/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>olá, Brasil!</h1>
     <InfoAluno/>

<br></br>
     <InfoCurso/>

<br></br>
    <AdicionarAluno>
    </>
  )
}

export default App
