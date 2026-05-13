import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [ 
        {id: 25,
        name: 'Pikachu',
        type: 'Elétrico',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
       },
        {id: 212,
        name: 'Scizor',
        type: 'Estrela',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png'
        },
        {id: 24,
        name: 'Bixo Cobra',
        type: 'Veneno',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png'
        }
       ]

  function PokemonList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())

  )

  return (
    <section>
    <label htmlFor="busca">Buscar por nome: </label>
    <input
        id="busca"
        type="search"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Ex.: char"
    
 />
    <p>Mostrando {listaFiltrada.length} Pokémon(s)</p>

    {listaFiltrada.length > 0 ? (
      listaFiltrada.map((pokemon) => (
        <PokemonCard 
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          imgUrl={pokemon.imageUrl}
    />
      ))
    ) : (
      <p>Nenhum Pokémon encontrado para esta busca.</p>
    )}

 </section>

  )
}

export default PokemonList
