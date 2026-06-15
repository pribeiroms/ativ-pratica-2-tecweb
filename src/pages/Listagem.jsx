export default function Listagem({ presentes, loading }) {
  return (
    <section className="listagem-section">
      <h2>Listagem de Presentes</h2>
      {loading ? (
        <p>Carregando listagem...</p>
      ) : presentes.length === 0 ? (
        <p>Nenhum presente cadastrado ainda.</p>
      ) : (
        <ul className="presentes-list">
          {presentes.map((presente) => (
            <li key={presente.id ?? `${presente.nome}-${presente.categoria}`} className="presente-card">
              <h3>{presente.nome}</h3>
              <p><strong>Categoria:</strong> {presente.categoria}</p>
              <p><strong>Preço estimado:</strong> R$ {presente.preco}</p>
              <p><strong>Prioridade:</strong> {presente.prioridade}</p>
              {presente.observacoes && <p><strong>Observações:</strong> {presente.observacoes}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
