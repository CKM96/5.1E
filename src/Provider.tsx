import { createContext, ReactNode, useEffect, useState } from "react"
import { Character } from "./types"

const CHARACTER_LOCAL_STORAGE_KEY = "character"
  
  export type Props = { characters: Character[], updateCharacters: (characters: Character[]) => void }
  
  export const DEFAULT_CONTEXT_VALUES = { characters: [], updateCharacters: () => {} }
  
  export const Context = createContext<Props>(DEFAULT_CONTEXT_VALUES)
  
  export default function Provider({ children }: { children: ReactNode }) {
    const [characters, updateCharacters] = useState<Character[]>(
      JSON.parse(
        (localStorage.getItem(CHARACTER_LOCAL_STORAGE_KEY)) || "[]"
      )
    )
  
    useEffect(() => {
      localStorage.setItem(CHARACTER_LOCAL_STORAGE_KEY, JSON.stringify(characters))
    }, [characters])

  
    return (
      <Context.Provider
        value={{ characters, updateCharacters }}
      >
        {children}
      </Context.Provider>
    )
  }
  