//Define o formato das Props de cada componente
//Define o formato das Props de cada componente
import type { IObra } from './IObra'

//Props do componente CardObra
export interface ICardObraProps {
    obra: IObra
    aoFinalizar: (id: number) => void
    aoPausar: (id: number) => void
}

//Props do componente Dashboard
export interface IDashboardProps {
    total: number
    criando: number
    pausadas: number
    finalizadas: number
    
}

//Props do componente Formulario
export interface IFormularioProps {
    aoAdicionarObra: (obra: IObra) => void
}