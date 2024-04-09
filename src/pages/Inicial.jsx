import estilos from './Inicial.module.css'
import { Cabecalho } from '../components/Cabecalho'
import { Conteudo } from '../components/Conteudo'
import { Lateral } from '../components/Lateral'
import {NextUIProvider} from "@nextui-org/react";

function Inicial() {
  return (

      <NextUIProvider>
        <div className={estilos.gridContainer}>
          <Cabecalho/>
          <Conteudo/>
          <Lateral/>
        </div>
      </NextUIProvider>

  )
}

export default Inicial
