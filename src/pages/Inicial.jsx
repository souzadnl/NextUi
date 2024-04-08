import estilos from './Inicial.module.css'
import { Cabecalho } from '../components/Cabecalho'
import { Conteudo } from '../components/Conteudo'
import { Lateral } from '../components/Lateral'

function Inicial() {
  return (
    <div className={estilos.gridContainer}>

      <Cabecalho/>
      <Conteudo/>
      <Lateral/>

    </div>
  )
}

export default Inicial
