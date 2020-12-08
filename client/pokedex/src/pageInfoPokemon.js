import './style.css'
import './styleDark.css'
import React from 'react'

class pokemonInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false,
      // items: []
      get: []
    };
  }
  getDataOnePokemons(){
    fetch("http://localhost:4242/pokemons/").then(res => { 
     res.json()
    .then(data => {
        console.log(data)
        this.setState({
          // isLoaded: true,
          get: data
          
        })
      })
    })
  }

  componentDidMount() {
    this.getDataOnePokemons()
  }
    
      render() {
        // const { error, isLoaded, items } = this.state;
        // if (error) {
        //   return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div>Loading...</div>;
        // } else {
          const infoPokemon=this.state.get.map((d)=>{
            // console.log(`Data nom --> ${d.nom}`)
            // console.log(`Data nom --> ${d.numéro}`)
            return(
            <div>
              <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${d.numéro}.png`} class="pokemonInfo-imgPokemon" alt="image du pokemon" />
              <h2>Identité</h2>
              <table style="width:50%">
              <tr>
                  <td>Couleur</td>
                  <td>Espece</td> 
                  <td>Type1</td>
                  <td>Taille</td>
                  <td>Poids</td>
                  <td>Forme</td>
              </tr>
              <tr>
                  <td>{d.couleur}</td>
                  <td>{d.espece}</td>
                  <td>{d.type1}</td>
                  <td>{d.taille}</td>
                  <td>{d.poids}</td>
                  <td>{d.forme}</td>
              </tr>
              </table>
                  <table style="width:50%">
                  <tr>
                    <td>Pokemon</td>
                    <td>Nom FR</td> 
                    <td>Nom EN</td>
                    <td>Nom DE</td>
                    <td>Nom TM</td>
                    <td>Nom JA</td>
                  </tr>
                  <tr>
                    <td>{d.pokemon}</td>
                    <td>{d.nom}</td>
                    <td>{d.nomen}</td>
                    <td>{d.nomde}</td>
                    <td>{d.nomtm}</td>
                    <td>{d.nomja}</td>
                  </tr>
                  </table>
                  <h2>Attaques</h2>
                  <table style="width:100%">
                  <tr>
                    <td>Niveau</td>
                    <td>Nom</td> 
                    <td>Puissance</td>
                    <td>Precision</td>
                    <td>PP</td>
                  </tr>
                  <tr>
                    <td>{d.niveau}</td>
                    <td>{d.nom}</td>
                    <td>{d.puissance}</td>
                    <td>{d.precision}</td>
                    <td>{d.pp}</td>
                  </tr>
                  </table>
              </div>
            )
          })
          return (
              <div class="pokemonInfo">
              {infoPokemon}
              </div>
          )
        }
}

export default pokemonInfo

