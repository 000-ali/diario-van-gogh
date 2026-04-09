import  type { IDashboardProps } from '../types/IProps'

function Dashboard({ total, criando, pausadas, finalizadas, filtroAtivo, aoFiltrar }: IDashboardProps) {
  return (
    <section>
      <p className="sidebar-titulo">Acervo</p>

      {/*
        Cada contador agora é um botão clicável.
        Quando clicado, chama aoFiltrar com o status correspondente.
        Se for o filtro ativo, adiciona a classe 'ativo' para destacar.
      */}

      <div
        className={`contador-card ${filtroAtivo === 'todas' ? 'ativo' : ''}`}
        onClick={() => aoFiltrar('todas')}
        style={{ cursor: 'pointer' }}
      >
        <div className="numero">{total}</div>
        <div className="legenda">Total de obras</div>
      </div>

      <div
        className={`contador-card azul ${filtroAtivo === 'criando' ? 'ativo' : ''}`}
        onClick={() => aoFiltrar('criando')}
        style={{ cursor: 'pointer' }}
      >
        <div className="numero">{criando}</div>
        <div className="legenda">Em criação</div>
      </div>

      <div
        className={`contador-card cinza ${filtroAtivo === 'pausada' ? 'ativo' : ''}`}
        onClick={() => aoFiltrar('pausada')}
        style={{ cursor: 'pointer' }}
      >
        <div className="numero">{pausadas}</div>
        <div className="legenda">Pausadas</div>
      </div>

      <div
        className={`contador-card verde ${filtroAtivo === 'finalizada' ? 'ativo' : ''}`}
        onClick={() => aoFiltrar('finalizada')}
        style={{ cursor: 'pointer' }}
      >
        <div className="numero">{finalizadas}</div>
        <div className="legenda">Finalizadas</div>
      </div>

    </section>
  )
}

export default Dashboard