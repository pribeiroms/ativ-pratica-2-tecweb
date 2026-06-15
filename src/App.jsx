import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Home from './pages/Home.jsx'
import Listagem from './pages/Listagem.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="listagem" element={<Listagem />} />
      </Route>
    </Routes>
  )
}

export default App
