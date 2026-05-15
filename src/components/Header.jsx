function Header() {
  return (
    <header className="site-header" id="inicio">
      <div className="site-header__inner">
        <div className="site-header__badge" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
	<path d="M 30 50 a 1 1 1 0 1 40 0 h-12.5 a 1 1 1 0 0 -15 0 z" fill="#f00" stroke="#222"></path>
	<circle cx="50" cy="50" r="5" fill="#222" stroke="#222"></circle>
	<path d="M 30 50 a 1 1 1 0 0 40 0 h-12.5 a 1 1 1 0 1 -15 0 z" fill="#fff" stroke="#222"></path>
</svg>
        </div>
        <div className="site-header__text">
          <h1>Pokédex</h1>
          <p>Sua enciclopédia Pokémon</p>
        </div>
      </div>
    </header>
  )
}

export default Header