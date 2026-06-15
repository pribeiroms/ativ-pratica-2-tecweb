import { Link } from 'react-router-dom'

const funcionalidades = [
  {
    title: 'Cadastro organizado',
    description:
      'Registre nome, categoria, preco estimado, prioridade e observacoes de cada presente.',
  },
  {
    title: 'Lista sempre atualizada',
    description:
      'Acompanhe os itens cadastrados em uma listagem dinamica compartilhada entre as paginas.',
  },
  {
    title: 'Dados integrados',
    description:
      'A aplicacao foi planejada para consumir uma API REST e complementar a wishlist.',
  },
]

function Home() {
  return (
    <section className="page home-page">
      <div className="hero-page">
        <div>
          <p className="eyebrow">Wishlist compartilhada</p>
          <h1>Organize os presentes que voce deseja acompanhar.</h1>
          <p className="lead">
            Cadastre itens, defina prioridades e consulte sua lista em uma
            experiencia simples feita com React.
          </p>
        </div>

        <div className="actions">
          <Link className="button primary" to="/cadastro">
            Cadastrar presente
          </Link>
          <Link className="button secondary" to="/listagem">
            Ver listagem
          </Link>
        </div>
      </div>

      <div className="home-summary">
        <article>
          <span>01</span>
          <h2>Escolha o presente</h2>
          <p>Guarde ideias para datas especiais em um unico lugar.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Defina prioridade</h2>
          <p>Marque o que e mais importante para decidir melhor depois.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Acompanhe a lista</h2>
          <p>Visualize os itens cadastrados e mantenha a wishlist atualizada.</p>
        </article>
      </div>

      <div className="feature-section">
        <div>
          <p className="eyebrow">Funcionalidades</p>
          <h2>Uma base pronta para o fluxo principal da aplicacao.</h2>
        </div>

        <div className="feature-grid">
          {funcionalidades.map((item) => (
            <article className="feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="home-cta">
        <div>
          <h2>Comece cadastrando o primeiro item desejado.</h2>
          <p>
            A partir do cadastro, os dados poderao ser refletidos na listagem
            conforme as proximas etapas do projeto forem implementadas.
          </p>
        </div>
        <Link className="button primary" to="/cadastro">
          Ir para cadastro
        </Link>
      </div>
    </section>
  )
}

export default Home
