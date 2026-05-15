import PokemonCard from './PokemonCard'
import { useState } from 'react'
import neymarImg from '../assets/neymar.png'

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
        },
        {id: 133,
        name: 'Eevee',
        type: 'Normal',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
        },
        {id: 1,
        name: 'Bulbasaur',
        type: 'Grama',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
        },
        {id: 69,
        name: 'Bellsprout',
        type: 'Grama',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png'
        },
        {id: 320,
        name: 'Wailmer',
        type: 'Água',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png'
        },
        {id: 150,
        name: 'Mewtwo',
        type: 'Psíquico',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
        },
        {id: 143,
        name: 'Snorlax',
        type: 'Normal',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png'
        },
        {id: 94,
        name: 'Gengar',
        type: 'Fantasma',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png'
        },
        {id: 10,
         name: 'Neymar Jr',
         type: 'Futebolista',
         imageUrl: neymarImg
        }
      ]

  function PokemonList() {

  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(filtro.toLowerCase())

  )

  return (
     <section
      className="pokemon-catalog"
      id="catalogo"
      aria-labelledby="catalogo-titulo"
    >
      <div className="pokemon-catalog__head">
        <h2 id="catalogo-titulo" className="pokemon-catalog__title">
          Catálogo
        </h2>
        <div className="pokemon-toolbar">
          <label htmlFor="busca">Buscar por nome</label>
          <input
            id="busca"
            className="pokemon-search"
            type="search"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Ex.: char"
            autoComplete="off"
          />
        </div>
      </div>

      {listaFiltrada.length === 0 ? (
        <p className="pokemon-catalog__empty">
          Nenhum Pokémon encontrado. Tente outro nome na busca.
        </p>
      ) : (
        <div className="pokemon-grid">
          {listaFiltrada.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default PokemonList
