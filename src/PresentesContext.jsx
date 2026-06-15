import { createContext, useState } from 'react'

export const PresentesContext = createContext({
  presentes: [],
  adicionarPresente: () => {},
})

export function PresentesProvider({ children }) {
  const [presentes, setPresentes] = useState([])

  function adicionarPresente(presente) {
    setPresentes((prevPresentes) => [...prevPresentes, presente])
  }

  return (
    <PresentesContext.Provider value={{ presentes, adicionarPresente }}>
      {children}
    </PresentesContext.Provider>
  )
}
