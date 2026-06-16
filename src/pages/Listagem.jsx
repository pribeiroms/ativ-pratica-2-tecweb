import { useEffect, useState } from 'react'
import { useWishlist } from '../context/WishlistContext'

function Listagem() {
  const { lista } = useWishlist()
  const [sugestoes, setSugestoes] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erroApi, setErroApi] = useState('')

  useEffect(() => {
    async function carregarSugestoes() {
      try {
        const resposta = await fetch('/api/sugestoes.json')

        if (!resposta.ok) {
          throw new Error('Nao foi possivel carregar as sugestoes.')
        }

        const dados = await resposta.json()
        setSugestoes(dados)
      } catch {
        setErroApi('Nao foi possivel carregar as sugestoes da API simulada.')
      } finally {
        setCarregando(false)
      }
    }

    carregarSugestoes()
  }, [])

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

      <div className="api-section">
        <div>
          <p className="eyebrow">API REST simulada</p>
          <h2>Sugestoes carregadas por fetch</h2>
          <p className="lead">
            Estes itens vem de um arquivo JSON publico, simulando o consumo de
            uma API REST para complementar a listagem.
          </p>
        </div>

        {carregando && <p className="status-message">Carregando sugestoes...</p>}
        {erroApi && <p className="status-message error">{erroApi}</p>}

        {!carregando && !erroApi && (
          <div className="presentes-grid">
            {sugestoes.map((presente) => (
              <article key={presente.id} className="presente-card api-card">
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
                <p>
                  <strong>Observacoes:</strong> {presente.observacoes}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Listagem
