//Define o formato de cada obra do diário. TypeScript funciona como um "contrato" que define o formato dos dados.
// Antes de criar qualquer tela, definimos como uma obra vai ser.

export interface IObra{
    id: number
    titulo: string
    tecnica: string
    dimensoes: string
    ano: number
    descricao: string
    status: 'criando' | 'pausada' | 'finalizada'
}