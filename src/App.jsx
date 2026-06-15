import { useContext, useState } from 'react'
import { PresentesContext } from './PresentesContext.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Listagem from './pages/Listagem.jsx'
import './App.css'

function App() {
  const { presentes, adicionarPresente, loading, erro } = useContext(PresentesContext)
  const [pagina, setPagina] = useState('cadastro')
  const [form, setForm] = useState({
    nome: '',
    categoria: '',
    preco: '',
    prioridade: '',
    observacoes: '',
  })
  const [mensagem, setMensagem] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMensagem('')

    const { nome, categoria, preco, prioridade, observacoes } = form
    if (!nome.trim() || !categoria || !preco || !prioridade) {
      setMensagem('Preencha todos os campos obrigatórios antes de cadastrar.')
      return
    }

    const valor = Number(preco)
    if (Number.isNaN(valor) || valor <= 0) {
      setMensagem('Informe um preço estimado válido e maior que zero.')
      return
    }

    adicionarPresente({
      id: Date.now(),
      nome: nome.trim(),
      categoria,
      preco: valor.toFixed(2),
      prioridade,
      observacoes: observacoes.trim(),
    })

    setForm({ nome: '', categoria: '', preco: '', prioridade: '', observacoes: '' })
    setMensagem('Presente cadastrado com sucesso! Veja na listagem abaixo.')
    setPagina('listagem')
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Wishlist de Presentes</h1>
        <p>Cadastre ideias de presentes e acompanhe a lista atualizada em tempo real.</p>
      </header>

      <nav className="app-nav">
        <button type="button" className={pagina === 'cadastro' ? 'active' : ''} onClick={() => setPagina('cadastro')}>
          Cadastro
        </button>
        <button type="button" className={pagina === 'listagem' ? 'active' : ''} onClick={() => setPagina('listagem')}>
          Listagem
        </button>
      </nav>

      <section className="api-status">
        {loading ? (
          <p>Carregando presentes da API simulada...</p>
        ) : erro ? (
          <p className="error">Erro ao carregar dados: {erro}</p>
        ) : (
          <p>{presentes.length} presentes carregados da API simulada.</p>
        )}
      </section>

      {pagina === 'cadastro' ? (
        <Cadastro
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          mensagem={mensagem}
          disabled={loading || Boolean(erro)}
        />
      ) : (
        <Listagem presentes={presentes} loading={loading} />
      )}
    </main>
  )
}

export default App
