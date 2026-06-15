function Listagem({ presentes }) {
  return (
    <section id="listagem">
      <h2>Lista de Presentes</h2>
      {presentes.length === 0 ? (
        <p className="empty-message">Nenhum presente cadastrado ainda.</p>
      ) : (
        <div className="presentes-grid">
          {presentes.map((presente, index) => (
            <article key={index} className="presente-card">
              <h3>{presente.nome}</h3>
              <p><strong>Categoria:</strong> {presente.categoria}</p>
              <p><strong>Preço estimado:</strong> R$ {presente.preco}</p>
              <p><strong>Prioridade:</strong> {presente.prioridade}</p>
              <p><strong>Observações:</strong> {presente.observacoes}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Listagem
