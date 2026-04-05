// App.tsx
// Componente raiz — gerencia o estado principal da aplicação
// e distribui dados e funções para os componentes filhos

import { useState } from 'react'
import  type { IObra } from './types/IObra'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import CardObra from './components/CardObra'
import Formulario from './components/Formulario'
import Rodape from './components/Rodape'

// Obras iniciais para a aplicação não começar vazia
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

  // Estado principal — lista de todas as obras
  // Quando setObras é chamado, o React re-renderiza tudo automaticamente
  const [obras, setObras] = useState<IObra[]>(obrasIniciais)

  // Contadores calculados a partir da lista — atualizam sozinhos
  const total       = obras.length
  const criando     = obras.filter(o => o.status === 'criando').length
  const pausadas    = obras.filter(o => o.status === 'pausada').length
  const finalizadas = obras.filter(o => o.status === 'finalizada').length

  // Muda o status da obra para 'finalizada'
  // .map() percorre todas as obras e só muda a que tem o id certo
  // O spread ...obra mantém todos os outros campos iguais
  const finalizarObra = (id: number) => {
    setObras(obras.map(obra =>
      obra.id === id ? { ...obra, status: 'finalizada' } : obra
    ))
  }

  // Muda o status da obra para 'pausada'
  const pausarObra = (id: number) => {
    setObras(obras.map(obra =>
      obra.id === id ? { ...obra, status: 'pausada' } : obra
    ))
  }

  // Adiciona uma nova obra no início da lista
  const adicionarObra = (novaObra: IObra) => {
    setObras([novaObra, ...obras])
  }

  return (
    <>
      <Navbar />

      {/* main é a tag semântica HTML5 para conteúdo principal */}
      <main className="container-fluid px-0">
        <div className="row g-0">

          {/* Barra lateral — 3 colunas no desktop, 12 no celular */}
          <div className="col-12 col-md-3">
            {/* aside é a tag semântica HTML5 para conteúdo lateral */}
            <aside className="sidebar-vangogh">
              <Dashboard
                total={total}
                criando={criando}
                pausadas={pausadas}
                finalizadas={finalizadas}
              />
            </aside>
          </div>

          {/* Conteúdo principal — 9 colunas no desktop, 12 no celular */}
          <div className="col-12 col-md-9">
            <div className="p-4">

              {/* Formulário para adicionar novas obras */}
              <Formulario aoAdicionarObra={adicionarObra} />

              {/* Lista de obras — um CardObra para cada item */}
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