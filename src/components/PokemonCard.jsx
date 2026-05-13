function PokemonCard({id, name, type, imgUrl}) {
  return (
    <div>
      <img
        src={imgUrl}
        alt={name}
      />
      <h2>#{String(id).padStart(3, '0')} — {name}</h2>
      <p>Tipo: {type}</p>
    </div>
  )
}

export default PokemonCard
