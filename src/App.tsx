import { useState } from 'react'
import  type { IObra } from './types/IObra'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import CardObra from './components/CardObra'
import Formulario from './components/Formulario'
import Rodape from './components/Rodape'

const obrasIniciais: IObra[] = [
  {
    id: 1,
    titulo: 'A Noite Estrelada',
    tecnica: 'Óleo sobre tela',
    dimensoes: '73 x 92 cm',
    ano: 1889,
    descricao: 'Uma das obras mais famosas de Van Gogh, pintada em Saint-Rémy-de-Provence.',
    status: 'finalizada'
  },
  {
    id: 2,
    titulo: 'Girassóis',
    tecnica: 'Óleo sobre tela',
    dimensoes: '92 x 73 cm',
    ano: 1888,
    descricao: 'Série de pinturas de girassóis em vaso, símbolo da amizade com Gauguin.',
    status: 'criando'
  },
  {
    id: 3,
    titulo: 'Campo de Trigo com Corvos',
    tecnica: 'Óleo sobre tela',
    dimensoes: '50 x 103 cm',
    ano: 1890,
    descricao: 'Uma das últimas obras de Van Gogh, cheia de tensão e movimento.',
    status: 'pausada'
  },
]

function App() {

  const [obras, setObras] = useState<IObra[]>(obrasIniciais)

  // Estado do filtro — começa mostrando todas as obras
  const [filtro, setFiltro] = useState<'todas' | 'criando' | 'pausada' | 'finalizada'>('todas')

  const total       = obras.length
  const criando     = obras.filter(o => o.status === 'criando').length
  const pausadas    = obras.filter(o => o.status === 'pausada').length
  const finalizadas = obras.filter(o => o.status === 'finalizada').length

  const finalizarObra = (id: number) => {
    setObras(obras.map(obra =>
      obra.id === id ? { ...obra, status: 'finalizada' } : obra
    ))
  }

  const pausarObra = (id: number) => {
    setObras(obras.map(obra =>
      obra.id === id ? { ...obra, status: 'pausada' } : obra
    ))
  }

  const adicionarObra = (novaObra: IObra) => {
    setObras([novaObra, ...obras])
  }

  // Filtra as obras conforme o filtro ativo
  // Se filtro === 'todas', mostra tudo
  // Senão, mostra só as que têm o status igual ao filtro
  const obrasFiltradas = filtro === 'todas'
    ? obras
    : obras.filter(o => o.status === filtro)

  return (
    <>
      <Navbar />

      <main className="container-fluid px-0">
        <div className="row g-0">

          <div className="col-12 col-md-3">
            <aside className="sidebar-vangogh">

              {/* Passa setFiltro e filtro para o Dashboard */}
              <Dashboard
                total={total}
                criando={criando}
                pausadas={pausadas}
                finalizadas={finalizadas}
                filtroAtivo={filtro}
                aoFiltrar={setFiltro}
              />

            </aside>
          </div>

          <div className="col-12 col-md-9">
            <div className="p-4">
              <Formulario aoAdicionarObra={adicionarObra} />

              {/* Mostra quantas obras estão sendo exibidas */}
              <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '12px' }}>
                {obrasFiltradas.length} obra(s) encontrada(s)
              </p>

              {obrasFiltradas.map(obra => (
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