import { useState } from 'react'

const estadoInicial = {
  nome: '',
  categoria: '',
  preco: '',
  prioridade: '',
  observacoes: '',
}

const errosInicial = {
  nome: '',
  categoria: '',
  preco: '',
  prioridade: '',
}

function validar(form) {
  const erros = { ...errosInicial }

  if (!form.nome.trim()) {
    erros.nome = 'O nome do item é obrigatório.'
  }
  if (!form.categoria) {
    erros.categoria = 'Selecione uma categoria.'
  }
  if (!form.preco) {
    erros.preco = 'O preço estimado é obrigatório.'
  } else if (Number(form.preco) <= 0) {
    erros.preco = 'O preço deve ser maior que zero.'
  }
  if (!form.prioridade) {
    erros.prioridade = 'Selecione a prioridade.'
  }

  return erros
}

function temErros(erros) {
  return Object.values(erros).some((msg) => msg !== '')
}

function Cadastro() {
  const [form, setForm] = useState(estadoInicial)
  const [erros, setErros] = useState(errosInicial)
  const [enviado, setEnviado] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (erros[name]) {
      setErros((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const novosErros = validar(form)
    if (temErros(novosErros)) {
      setErros(novosErros)
      return
    }
    console.log('Presente cadastrado:', form)
    setForm(estadoInicial)
    setErros(errosInicial)
    setEnviado(true)
    setTimeout(() => setEnviado(false), 3000)
  }

  return (
    <section className="page cadastro-page">
      <p className="eyebrow">Cadastro</p>
      <h1>Novo presente</h1>
      <p className="lead">Preencha os dados do item que deseja adicionar à sua wishlist.</p>

      {enviado && <p className="form-success">Presente cadastrado com sucesso!</p>}

      <form className="cadastro-form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="nome">Nome do item</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleChange}
            placeholder="Ex: Fone de ouvido"
          />
          {erros.nome && <span className="form-error">{erros.nome}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" name="categoria" value={form.categoria} onChange={handleChange}>
            <option value="">Selecione uma categoria</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Livros">Livros</option>
            <option value="Roupas">Roupas</option>
            <option value="Esportes">Esportes</option>
            <option value="Casa">Casa</option>
            <option value="Outros">Outros</option>
          </select>
          {erros.categoria && <span className="form-error">{erros.categoria}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="preco">Preço estimado (R$)</label>
          <input
            id="preco"
            name="preco"
            type="number"
            value={form.preco}
            onChange={handleChange}
            placeholder="Ex: 150.00"
            min="0.01"
            step="0.01"
          />
          {erros.preco && <span className="form-error">{erros.preco}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="prioridade">Prioridade</label>
          <select id="prioridade" name="prioridade" value={form.prioridade} onChange={handleChange}>
            <option value="">Selecione a prioridade</option>
            <option value="Alta">Alta</option>
            <option value="Media">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
          {erros.prioridade && <span className="form-error">{erros.prioridade}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="observacoes">Observações</label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={form.observacoes}
            onChange={handleChange}
            placeholder="Informações adicionais (opcional)"
            rows={3}
          />
        </div>

        <button type="submit" className="button primary">
          Cadastrar presente
        </button>
      </form>
    </section>
  )
}

export default Cadastro