import PokemonCard from './PokemonCard'

function PokemonList() {
  return (
    <section>
      <PokemonCard 
        id={25}
        name="Pikachu"
        type="Elétrico"
        imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      />
      <PokemonCard 
        id={212}
        name="Scizor"
        type="Inseto"
        imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png"
      />
        <PokemonCard
        id={24}
        name="Bixo Cobra"
        type="Veneno"
        imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
      />
    </section>
  )
}

export default PokemonList
