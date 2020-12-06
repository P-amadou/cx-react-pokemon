import logo from './pokeball.svg';
import './App.css';
import './style.css'
import React from 'react';
import pokedex3d from './Pokedex3D.png'
function incr(nb) {
  let cpt=0
  for (let i = 0; i < nb.length; i++) {
    cpt++
  }
  return cpt
}
  class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: null,
  //     isLoaded: false,
  //     items: []
  //   };
  // }
  
  state={
    get:{}
  }
  
  componentDidMount() {
    fetch("http://localhost:4242/pokemons")
      .then((res) => { 
        return res.json()
      })
      .then((result) => {
          console.log(result);
          this.setState({
            // isLoaded: true,
            get: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        // (error) => {
        //   this.setState({
        //     isLoaded: true,
        //     errorD
        //   });
        // }
      )
  }

  render() {
    // const { error, isLoaded, items } = this.state;
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Welcome to our API Pokedex.
    //         </p><br/>
    //         <p></p>
    //       </header>
    //     </div>
    //   )
    // } else {
      
        return (
              <div>
              <img src={ pokedex3d }/>
              <div class="container">                     
                <div class="card" >
                  <img src ={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.get.numéro}.png`}/>
                  <h1>#{this.state.get.numéro}</h1>
                  <p>{this.state.get.nom}</p>
                </div>
              </div>
              </div>
              
                // <div className="scripts2">
                // <header className="scripts2-header">
                //     {/* <img src={imgPokemon} className="scripts2-imgPokemon" alt="image du pokemon" /> */}
                // </header>
                // <h2>Identité</h2>
                // <table style="width:50%">
                // <tr>
                //     <td>Couleur</td>
                //     <td>Espece</td> 
                //     <td>Type1</td>
                //     <td>Taille</td>
                //     <td>Poids</td>
                //     <td>Forme</td>
                // </tr>
                // <tr>
                //     <td>{this.state.items.couleur}</td>
                //     <td>{this.state.items.espece}</td>
                //     <td>{this.state.items.type1}</td>
                //     <td>{this.state.items.taille}</td>
                //     <td>{this.state.items.poids}</td>
                //     <td>{this.state.items.forme}</td>
                // </tr>
                // </table>
                    // <table style="width:50%">
                    // <tr>
                    //   <td>Pokemon</td>
                    //   <td>Nom FR</td> 
                    //   <td>Nom EN</td>
                    //   <td>Nom DE</td>
                    //   <td>Nom TM</td>
                    //   <td>Nom JA</td>
                    // </tr>
                    // <tr>
                    //   <td>{this.state.items.pokemon}</td>
                    //   <td>{this.state.items.nom}</td>
                    //   <td>{this.state.items.nomen}</td>
                    //   <td>{this.state.items.nomde}</td>
                    //   <td>{this.state.items.nomtm}</td>
                    //   <td>{this.state.items.nomja}</td>
                    // </tr>
                    // </table>
                    // <h2>Attaques</h2>
                    /* <table style="width:100%">
                    <tr>
                      <td>Niveau</td>
                      <td>Nom</td> 
                      <td>Puissance</td>
                      <td>Precision</td>
                      <td>PP</td>
)                    </tr>
                    <tr>
                      <td>{this.state.items.niveau}</td>
                      <td>{this.state.items.nom}</td>
                      <td>{this.state.items.puissance}</td>
                      <td>{this.state.items.precision}</td>
                      <td>{this.state.items.pp}</td>
                    </tr>
                    </table> */
                // </div>
        )
    }
  // }
}

export default App;
