// CardObra.tsx
// Exibe as informações de UMA obra em formato de card
// Recebe a obra e as funções de ação via Props

import type { ICardObraProps } from '../types/IProps'

function CardObra({ obra, aoFinalizar, aoPausar }: ICardObraProps) {

  // Função que retorna o badge certo para cada status
  // Cada status tem uma cor diferente definida no global.css
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

      {/* Topo do card — fundo azul escuro com título e ano */}
      <div className="card-topo">
        <h4 className="obra-titulo">{obra.titulo}</h4>
        <div className="obra-ano">{obra.ano} — {obra.tecnica}</div>
      </div>

      {/* Corpo do card — informações da obra */}
      <div className="p-3">

        {/* Badge de status — muda visualmente conforme o status */}
        <div className="mb-2">
          {renderBadge()}
        </div>

        {/* Descrição da obra */}
        <p className="mb-2" style={{ fontSize: '0.88rem', color: '#555' }}>
          {obra.descricao}
        </p>

        {/* Dimensões */}
        <p className="mb-3" style={{ fontSize: '0.8rem', color: '#999' }}>
          {obra.dimensoes}
        </p>

        {/*
          Botões de ação — só aparecem se a obra NÃO estiver finalizada
          O && significa: "se for verdade, mostra o que vem depois"
        */}
        {obra.status !== 'finalizada' && (
          <div className="d-flex gap-2">

            {/*
              onClick chama a função aoPausar passada pelo pai
              e envia o id dessa obra como argumento
            */}
            {obra.status === 'criando' && (
              <button
                className="btn-vangogh-secundario"
                onClick={() => aoPausar(obra.id)}
              >
                Pausar
              </button>
            )}

            {/*
              onClick chama aoFinalizar — o pai vai atualizar
              o status dessa obra para 'finalizada'
            */}
            <button
              className="btn-vangogh-primario"
              onClick={() => aoFinalizar(obra.id)}
            >
              Finalizar obra
            </button>

          </div>
        )}

      </div>
    </div>
  )
}

export default CardObra