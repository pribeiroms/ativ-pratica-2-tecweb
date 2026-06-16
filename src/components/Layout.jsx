import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link className="brand" to="/">
          Wishlist de Presentes
        </Link>

        <nav className="main-nav" aria-label="Navegacao principal">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
          <NavLink to="/listagem">Listagem</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
