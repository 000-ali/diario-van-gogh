// Formulario.tsx
// Formulário para cadastrar uma nova obra
// Tem estado próprio para os campos, e chama uma função
// do pai quando o usuário clica em "Adicionar"

import { useState } from 'react'
import type { IObra } from '../types/IObra'
import type { IFormularioProps } from '../types/IProps'

function Formulario({ aoAdicionarObra }: IFormularioProps) {

  // Estado local — controla cada campo do formulário
  // Toda vez que o usuário digita, o estado atualiza
  const [titulo, setTitulo]       = useState<string>('')
  const [tecnica, setTecnica]     = useState<string>('Óleo sobre tela')
  const [dimensoes, setDimensoes] = useState<string>('')
  const [ano, setAno]             = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')

  // Função chamada ao clicar em "Adicionar obra"
  const handleAdicionar = () => {

    // Validação — não deixa adicionar sem título
    if (titulo.trim() === '') {
      alert('Digite o título da obra!')
      return
    }

    // Cria o objeto da nova obra seguindo a interface IObra
    const novaObra: IObra = {
      id: Date.now(), // usa o timestamp como ID único
      titulo,
      tecnica,
      dimensoes: dimensoes || 'Dimensões não informadas',
      ano: Number(ano) || 0,
      descricao: descricao || 'Sem descrição.',
      status: 'criando' // toda obra começa como "em criação"
    }

    // Chama a função do pai para adicionar na lista principal
    aoAdicionarObra(novaObra)

    // Limpa os campos depois de adicionar
    setTitulo('')
    setTecnica('Óleo sobre tela')
    setDimensoes('')
    setAno('')
    setDescricao('')
  }

  return (
    <div className="form-vangogh mb-4">
      <p className="form-titulo">+ Adicionar nova obra</p>

      {/* Grid Bootstrap — dois campos por linha */}
      <div className="row g-2">

        {/* Título — ocupa 6 colunas */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Título da obra"
            value={titulo}
            // onChange atualiza o estado a cada tecla digitada
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        {/* Técnica — ocupa 6 colunas */}
        <div className="col-12 col-md-6">
          <select
            className="form-select"
            value={tecnica}
            onChange={(e) => setTecnica(e.target.value)}
          >
            <option>Óleo sobre tela</option>
            <option>Aquarela</option>
            <option>Acrílica</option>
            <option>Grafite</option>
            <option>Pastel</option>
          </select>
        </div>

        {/* Dimensões — ocupa 6 colunas */}
        <div className="col-12 col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Dimensões (ex: 73 x 92 cm)"
            value={dimensoes}
            onChange={(e) => setDimensoes(e.target.value)}
          />
        </div>

        {/* Ano — ocupa 6 colunas */}
        <div className="col-12 col-md-6">
          <input
            type="number"
            className="form-control"
            placeholder="Ano (ex: 1889)"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
          />
        </div>

        {/* Descrição — ocupa a linha toda */}
        <div className="col-12">
          <textarea
            className="form-control"
            placeholder="Breve descrição da obra..."
            rows={2}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

      </div>

      {/* Botão de adicionar */}
      <div className="mt-3">
        <button
          className="btn-vangogh-primario"
          onClick={handleAdicionar}
        >
          Adicionar obra
        </button>
      </div>

    </div>
  )
}

export default Formulario