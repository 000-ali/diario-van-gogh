# Diário de Van Gogh

Aplicação desenvolvida para a disciplina **Desenvolvimento de Software WEB**
Prof. Alexandre Cláudio de Almeida — Escola Politécnica / PUC Goiás

---

## Sobre o projeto

O Diário de Van Gogh é um portfólio pessoal de obras de arte. O usuário pode
cadastrar obras, acompanhar o status de cada uma (em criação, pausada ou
finalizada) e visualizar um dashboard com contadores que atualizam em tempo real.

---

## Estrutura de pastas
src/
├── components/       — componentes reutilizáveis da interface
│   ├── Navbar.tsx    — barra de navegação superior
│   ├── Dashboard.tsx — painel de contadores (recebe props)
│   ├── CardObra.tsx  — card de uma única obra
│   ├── Formulario.tsx— formulário para adicionar obras
│   └── Rodape.tsx    — rodapé com tag address
├── types/
│   ├── IObra.ts      — interface que define o formato de uma obra
│   └── IProps.ts     — interfaces que definem as props de cada componente
├── styles/
│   └── global.css    — paleta de cores Van Gogh e estilos personalizados
├── App.tsx           — componente raiz que gerencia o estado global
└── main.tsx          — ponto de entrada da aplicação

---

## Justificativa da arquitetura

### Por que o estado fica no App.tsx?

O estado principal (lista de obras) fica no `App.tsx` porque múltiplos
componentes dependem dos mesmos dados — o `Dashboard` precisa dos contadores,
o `CardObra` precisa de cada obra, e o `Formulario` precisa adicionar na lista.
Quando o estado fica no componente pai, todos os filhos recebem os dados
atualizados automaticamente via props.

### Por que cada componente tem uma responsabilidade única?

- `Navbar` — só exibe o cabeçalho, sem lógica
- `Dashboard` — só exibe os contadores, recebe números prontos via props
- `CardObra` — só exibe uma obra e dispara eventos de ação
- `Formulario` — só gerencia os campos do formulário com estado local
- `Rodape` — só exibe as informações do rodapé

Essa separação facilita a manutenção — se o visual do card mudar,
só o `CardObra.tsx` precisa ser alterado.

### Por que interfaces TypeScript separadas?

As interfaces ficam em `src/types/` para centralizar os contratos de dados.
Se a estrutura de uma obra mudar, só o `IObra.ts` precisa ser atualizado,
e o TypeScript aponta automaticamente todos os lugares que precisam ser
ajustados.

---

## Como rodar o projeto
```bash
npm install
npm run dev
```

Acesse http://localhost:5173

---

## Requisitos atendidos

- [x] React + Vite + TypeScript
- [x] Bootstrap via CDN
- [x] Interfaces TypeScript para Props e estados
- [x] Layout responsivo — 3/9 colunas no desktop, empilhado no mobile
- [x] Tags semânticas: header, main, section, aside, address
- [x] Dashboard com contadores dinâmicos
- [x] Atualização imediata ao finalizar ou pausar obra
- [x] CSS externo com paleta personalizada Van Gogh
- [x] Formulário para cadastrar novas obras

---

**Aluna:** Aline de Oliveira Tiburcio Souza
**Disciplina:** Desenvolvimento de Software WEB
**Professor:** Alexandre Cláudio de Almeida
**Ano:** 2025