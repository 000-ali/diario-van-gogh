// Navbar.tsx
// Componente da barra de navegação superior
// Não recebe Props — é puramente visual e estático

function Navbar() {
  return (
    // <header> é a tag semântica HTML5 para cabeçalho da página
    <header>
      <nav className="navbar-vangogh d-flex justify-content-between align-items-center">

        {/* Lado esquerdo — nome do projeto */}
        <div>
          <div className="brand">Diário de Van Gogh</div>
          <div className="subtitulo">Portfólio Pessoal de Obras</div>
        </div>

        {/* Lado direito — período */}
        <div className="subtitulo">
          1880 — 1890
        </div>

      </nav>
    </header>
  )
}

export default Navbar