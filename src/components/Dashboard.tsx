// Dashboard.tsx
// Painel de contadores da barra lateral
// Recebe os números via Props e apenas exibe — não tem lógica própria


import type { IDashboardProps } from '../types/IProps' /*PQ que aqui foi necessario eu colocar o "type" na frente de import?? */

function Dashboard({ total, criando, pausadas, finalizadas, totalHoras }: IDashboardProps) {
  return (
    // <section> é a tag semântica HTML5 para seções de conteúdo
    <section>

      <p className="sidebar-titulo">Acervo</p>

      {/* Contador: total de obras */}

      <div className="contador-card">
        <div className="numero">{total}</div>
        <div className="legenda">Total de obras</div>
      </div>

      {/* Contador: obras em criação */}

      <div className="contador-card azul">
        <div className="numero">{criando}</div>
        <div className="legenda">Em criação</div>
      </div>

      {/* Contador: obras pausadas */}

      <div className="contador-card cinza">
        <div className="numero">{pausadas}</div>
        <div className="legenda">Pausadas</div>
      </div>

      {/* Contador: obras finalizadas */}

      <div className="contador-card verde">
        <div className="numero">{finalizadas}</div>
        <div className="legenda">Finalizadas</div>
      </div>

      {/* Caixa especial de horas totais */}
      
      <div className="horas-box">
        <div className="horas-numero">{totalHoras}h</div>
        <div className="horas-legenda">Horas dedicadas</div>
      </div>

    </section>
  )
}

export default Dashboard