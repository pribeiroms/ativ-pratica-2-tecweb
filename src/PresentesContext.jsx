import { createContext, useEffect, useState } from 'react'

export const PresentesContext = createContext({
  presentes: [],
  adicionarPresente: () => {},
  loading: true,
  erro: null,
})

export function PresentesProvider({ children }) {
  const [presentes, setPresentes] = useState([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState(null)

  useEffect(() => {
    fetch('/presentes.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao carregar dados da API simulada')
        }
        return response.json()
      })
      .then((data) => {
        setPresentes(data)
      })
      .catch((error) => {
        setErro(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  function adicionarPresente(presente) {
    setPresentes((prevPresentes) => [...prevPresentes, presente])
  }

  return (
    <PresentesContext.Provider value={{ presentes, adicionarPresente, loading, erro }}>
      {children}
    </PresentesContext.Provider>
  )
}
