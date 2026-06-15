import { createContext, useState, useContext } from 'react'

const WishlistContext = createContext(null)

export function WishlistProvider({ children }) {
  const [lista, setLista] = useState([])

  function addPresente(presente) {
    setLista((prev) => [...prev, { ...presente, id: Date.now() }])
  }

  return (
    <WishlistContext.Provider value={{ lista, addPresente }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  return useContext(WishlistContext)
}
