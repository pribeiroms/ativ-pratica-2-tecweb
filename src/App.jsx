<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
import { useState } from 'react'
import { PresentesProvider } from './PresentesContext.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
>>>>>>> origin/feature/miguel-dev
import Listagem from './Listagem.jsx'
import './App.css'

const categorias = ['Eletrônicos', 'Roupas', 'Livros', 'Beleza', 'Outros']
const prioridades = ['Alta', 'Média', 'Baixa']

function App() {
  const [presentes, setPresentes] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)
  const [pagina, setPagina] = useState('cadastro')
  const [form, setForm] = useState({
    nome: '',
    categoria: '',
    preco: '',
    prioridade: '',
    observacoes: '',
  })
  const [mensagem, setMensagem] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao carregar dados da API REST simulada')
        }
        return response.json()
      })
      .then((data) => {
        const apresentados = data.map((item) => ({
          id: item.id,
          nome: item.title,
          categoria: item.category || 'Outros',
          preco: Number(item.price).toFixed(2),
          prioridade: 'Média',
          observacoes: item.description || '',
        }))
        setPresentes(apresentados)
      })
      .catch((error) => {
        setErro(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

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

    const novoPresente = {
      id: Date.now(),
      nome: nome.trim(),
      categoria,
      preco: valor.toFixed(2),
      prioridade,
      observacoes: observacoes.trim(),
    }

    setPresentes((prev) => [...prev, novoPresente])
    setForm({ nome: '', categoria: '', preco: '', prioridade: '', observacoes: '' })
    setMensagem('Presente cadastrado com sucesso! Veja na listagem abaixo.')
    setPagina('listagem')
  }

  return (
<<<<<<< HEAD
    <main className="app-container">
      <header className="app-header">
        <h1>Wishlist de Presentes</h1>
        <p>Cadastre ideias de presentes e acompanhe a lista atualizada em tempo real.</p>
      </header>

      <nav className="app-nav">
        <button type="button" className={pagina === 'cadastro' ? 'active' : ''} onClick={() => setPagina('cadastro')}>
          Cadastro
=======
    <PresentesProvider>
      <>
        <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
>>>>>>> origin/feature/miguel-dev
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
        <section className="cadastro-section">
          <h2>Cadastro de Presente</h2>
          <form className="presente-form" onSubmit={handleSubmit}>
            <label>
              Nome do item
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome do presente"
                disabled={loading || Boolean(erro)}
              />
            </label>

            <label>
              Categoria
              <select name="categoria" value={form.categoria} onChange={handleChange} disabled={loading || Boolean(erro)}>
                <option value="">Selecione</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </label>

<<<<<<< HEAD
            <label>
              Preço estimado
              <input
                name="preco"
                type="number"
                step="0.01"
                value={form.preco}
                onChange={handleChange}
                placeholder="Ex: 250.00"
                disabled={loading || Boolean(erro)}
              />
            </label>

            <label>
              Prioridade
              <select name="prioridade" value={form.prioridade} onChange={handleChange} disabled={loading || Boolean(erro)}>
                <option value="">Selecione</option>
                {prioridades.map((prioridade) => (
                  <option key={prioridade} value={prioridade}>
                    {prioridade}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Observações
              <textarea
                name="observacoes"
                value={form.observacoes}
                onChange={handleChange}
                placeholder="Observações opcionais"
                rows="4"
                disabled={loading || Boolean(erro)}
              />
            </label>

            {mensagem && <p className="form-message">{mensagem}</p>}
            <button type="submit" disabled={loading || Boolean(erro)}>
              Adicionar presente
            </button>
          </form>
        </section>
      ) : (
        <Listagem presentes={presentes} />
      )}
    </main>
=======
      <div className="ticks"></div>
      <section id="spacer"></section>
      <Listagem presentes={presentes} />
    </>
    </PresentesProvider>
>>>>>>> origin/feature/miguel-dev
  )
}

export default App
