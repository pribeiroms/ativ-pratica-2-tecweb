export default function Cadastro({ form, onChange, onSubmit, mensagem, disabled }) {
  return (
    <section className="cadastro-section">
      <h2>Cadastro de Presente</h2>
      <form className="presente-form" onSubmit={onSubmit}>
        <label>
          Nome do item
          <input
            name="nome"
            value={form.nome}
            onChange={onChange}
            placeholder="Nome do presente"
            disabled={disabled}
          />
        </label>

        <label>
          Categoria
          <select name="categoria" value={form.categoria} onChange={onChange} disabled={disabled}>
            <option value="">Selecione</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Roupas">Roupas</option>
            <option value="Livros">Livros</option>
            <option value="Beleza">Beleza</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        <label>
          Preço estimado
          <input
            name="preco"
            type="number"
            step="0.01"
            value={form.preco}
            onChange={onChange}
            placeholder="Ex: 250.00"
            disabled={disabled}
          />
        </label>

        <label>
          Prioridade
          <select name="prioridade" value={form.prioridade} onChange={onChange} disabled={disabled}>
            <option value="">Selecione</option>
            <option value="Alta">Alta</option>
            <option value="Média">Média</option>
            <option value="Baixa">Baixa</option>
          </select>
        </label>

        <label>
          Observações
          <textarea
            name="observacoes"
            value={form.observacoes}
            onChange={onChange}
            placeholder="Observações opcionais"
            rows="4"
            disabled={disabled}
          />
        </label>

        {mensagem && <p className="form-message">{mensagem}</p>}
        <button type="submit" disabled={disabled}>
          Adicionar presente
        </button>
      </form>
    </section>
  )
}
