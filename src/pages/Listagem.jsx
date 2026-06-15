import { useWishlist } from '../context/WishlistContext'

function Listagem() {
  const { lista } = useWishlist()

  return (
    <section className="page listagem-page">
      <p className="eyebrow">Listagem</p>
      <h1>Presentes cadastrados</h1>
      <p className="lead">
        Acompanhe os itens adicionados no cadastro da wishlist.
      </p>

      {lista.length === 0 ? (
        <p className="empty-message">Nenhum presente cadastrado ainda.</p>
      ) : (
        <div className="presentes-grid">
          {lista.map((presente) => (
            <article key={presente.id} className="presente-card">
              <h2>{presente.nome}</h2>
              <p>
                <strong>Categoria:</strong> {presente.categoria}
              </p>
              <p>
                <strong>Preco estimado:</strong> R$ {presente.preco}
              </p>
              <p>
                <strong>Prioridade:</strong> {presente.prioridade}
              </p>
              {presente.observacoes && (
                <p>
                  <strong>Observacoes:</strong> {presente.observacoes}
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Listagem
