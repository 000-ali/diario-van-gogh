import { useState } from 'react'
import type { IObra } from './types/IObra'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import CardObra from './components/CardObra'
import Rodape from './components/Rodape'

const obrasIniciais: IObra[] = [
  {
    id: 1,
    titulo: 'A Noite Estrelada',
    tecnica: 'Óleo sobre tela',
    dimensoes: '73 x 92 cm',
    ano: 1889,
    descricao: 'Uma das obras mais famosas de Van Gogh, pintada em Saint-Rémy-de-Provence.',
    horasDedicadas: 40,
    status: 'finalizada'
  },
  {
    id: 2,
    titulo: 'Girassóis',
    tecnica: 'Óleo sobre tela',
    dimensoes: '92 x 73 cm',
    ano: 1888,
    descricao: 'Série de pinturas de girassóis em vaso, símbolo da amizade com Gauguin.',
    horasDedicadas: 30,
    status: 'criando'
  },
  {
    id: 3,
    titulo: 'Campo de Trigo com Corvos',
    tecnica: 'Óleo sobre tela',
    dimensoes: '50 x 103 cm',
    ano: 1890,
    descricao: 'Uma das últimas obras de Van Gogh, cheia de tensão e movimento.',
    horasDedicadas: 15,
    status: 'pausada'
  },
]

function App() {

  // Estado principal — lista de todas as obras
  const [obras, setObras] = useState<IObra[]>(obrasIniciais)

  // Calcula os contadores a partir da lista — atualizam sozinhos
  const total       = obras.length
  const criando     = obras.filter(o => o.status === 'criando').length
  const pausadas    = obras.filter(o => o.status === 'pausada').length
  const finalizadas = obras.filter(o => o.status === 'finalizada').length
  const totalHoras  = obras.reduce((soma, o) => soma + o.horasDedicadas, 0)

  // Muda o status de uma obra para 'finalizada'
  // .map() percorre todas as obras e atualiza só a que tem o id certo
  const finalizarObra = (id: number) => {
    setObras(obras.map(obra =>
      obra.id === id ? { ...obra, status: 'finalizada' } : obra
    ))
  }

  // Muda o status de uma obra para 'pausada'
  const pausarObra = (id: number) => {
    setObras(obras.map(obra =>
      obra.id === id ? { ...obra, status: 'pausada' } : obra
    ))
  }

  return (
    <>
      <Navbar />

      <main className="container-fluid px-0">
        <div className="row g-0">

          {/* Barra lateral — 3 colunas no desktop, 12 no celular */}
          <div className="col-12 col-md-3">
            <aside className="sidebar-vangogh">
              <Dashboard
                total={total}
                criando={criando}
                pausadas={pausadas}
                finalizadas={finalizadas}
                totalHoras={totalHoras}
              />
            </aside>
          </div>

          {/* Conteúdo principal — 9 colunas no desktop, 12 no celular */}
          <div className="col-12 col-md-9">
            <div className="p-4">

              {/*
                .map() percorre cada obra da lista
                e renderiza um CardObra para cada uma
                O "key" é obrigatório — ajuda o React a
                identificar cada card de forma única
              */}
              {obras.map(obra => (
                <CardObra
                  key={obra.id}
                  obra={obra}
                  aoFinalizar={finalizarObra}
                  aoPausar={pausarObra}
                />
              ))}

            </div>
          </div>

        </div>
      </main>

      <Rodape />
    </>
  )
}

export default App