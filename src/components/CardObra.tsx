// CardObra.tsx
// Exibe as informações de UMA obra em formato de card
// Agora tem estado próprio para controlar se o card está expandido ou não

import { useState } from 'react'
import type { ICardObraProps } from '../types/IProps'

function CardObra({ obra, aoFinalizar, aoPausar }: ICardObraProps) {

  // Estado local — controla se o card está expandido
  // Começa fechado (false) e abre quando o usuário clica no título
  const [expandido, setExpandido] = useState<boolean>(false)

  const renderBadge = () => {
    if (obra.status === 'criando') {
      return <span className="badge badge-criando">Em criação</span>
    }
    if (obra.status === 'pausada') {
      return <span className="badge badge-pausada">Pausada</span>
    }
    return <span className="badge badge-finalizada">Finalizada</span>
  }

  return (
    <div className="card-obra">

      {/* Topo do card — clicável para expandir/recolher */}
      <div
        className="card-topo"
        onClick={() => setExpandido(!expandido)}
        style={{ cursor: 'pointer' }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="obra-titulo">{obra.titulo}</h4>
            <div className="obra-ano">{obra.ano} — {obra.tecnica}</div>
          </div>

          {/* Seta que indica se está expandido ou recolhido */}
          <div style={{ color: '#c9a84c', fontSize: '1.2rem' }}>
            {expandido ? '▲' : '▼'}
          </div>
        </div>
      </div>

      {/* Corpo do card — só aparece quando expandido === true */}
      {expandido && (
        <div className="p-3">

          <div className="mb-2">
            {renderBadge()}
          </div>

          <p className="mb-2" style={{ fontSize: '0.88rem', color: '#555' }}>
            {obra.descricao}
          </p>

          <p className="mb-3" style={{ fontSize: '0.8rem', color: '#999' }}>
            {obra.dimensoes}
          </p>

          {obra.status !== 'finalizada' && (
            <div className="d-flex gap-2">
              {obra.status === 'criando' && (
                <button
                  className="btn-vangogh-secundario"
                  onClick={() => aoPausar(obra.id)}
                >
                  Pausar
                </button>
              )}
              <button
                className="btn-vangogh-primario"
                onClick={() => aoFinalizar(obra.id)}
              >
                Finalizar obra
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  )
}

export default CardObra