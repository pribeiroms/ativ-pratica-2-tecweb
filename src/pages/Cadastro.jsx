import { useState } from 'react'

const estadoInicial = {
  nome: '',
  categoria: '',
  preco: '',
  prioridade: '',
  observacoes: '',
}

function Cadastro() {
  const [form, setForm] = useState(estadoInicial)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('Presente cadastrado:', form)
    setForm(estadoInicial)
  }

  return (
    <section className="page cadastro-page">
      <p className="eyebrow">Cadastro</p>
      <h1>Novo presente</h1>
      <p className="lead">
        Preencha os dados do item que deseja adicionar à sua wishlist.
      </p>

      <form className="cadastro-form" onSubmit={handleSubmit}>
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
        </div>

        <div className="form-group">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
          >
            <option value="">Selecione uma categoria</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Livros">Livros</option>
            <option value="Roupas">Roupas</option>
            <option value="Esportes">Esportes</option>
            <option value="Casa">Casa</option>
            <option value="Outros">Outros</option>
          </select>
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
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="prioridade">Prioridade</label>
          <select
            id="prioridade"
            name="prioridade"
            value={form.prioridade}
            onChange={handleChange}
          >
            <option value="">Selecione a prioridade</option>
            <option value="Alta">Alta</option>
            <option value="Media">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
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
