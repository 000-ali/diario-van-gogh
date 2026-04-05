// Rodape.tsx
// Componente do rodapé da aplicação
// O professor exige a tag <address> com dados do aluno

function Rodape() {
  return (
    // <footer> é a tag semântica HTML5 para rodapé
    <footer className="rodape-vangogh">
      {/*
        <address> é uma tag HTML5 para informações de autoria.
      */}
      <address>
        Aline de Oliveira Tiburcio Souza &mdash; Desenvolvimento de Software WEB &mdash; Prof. Alexandre Almeida &mdash; 2025
      </address>
    </footer>
  )
}

export default Rodape