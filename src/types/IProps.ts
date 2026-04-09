import type { IObra } from './IObra'

export interface ICardObraProps {
  obra: IObra
  aoFinalizar: (id: number) => void
  aoPausar: (id: number) => void
}

export interface IDashboardProps {
  total: number
  criando: number
  pausadas: number
  finalizadas: number
  filtroAtivo: 'todas' | 'criando' | 'pausada' | 'finalizada'
  aoFiltrar: (filtro: 'todas' | 'criando' | 'pausada' | 'finalizada') => void
}

export interface IFormularioProps {
  aoAdicionarObra: (obra: IObra) => void
}