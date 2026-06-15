import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="page hero-page">
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
    </section>
  )
}

export default Home
