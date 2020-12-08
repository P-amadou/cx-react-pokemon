// import logo from './pokeball.svg';
// import './App.css';
import './style.css'
import React from 'react';
import pokedex3d from './Pokedex3D.png'
import DarkMode from './darkMode'
let idP
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false,
      // items: []
      get: [],
      getOne:[],
      activePokemonId:""
    };
  }
  
 
  
  getAllPokemons(){
    fetch("http://localhost:4242/pokemons").then(res => { 
     res.json()
    .then(data => {
        console.log(data)
        this.setState({
          // isLoaded: true,
          get: data
          
        })
      })
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      // (error) => {
      //   this.setState({
      //     isLoaded: true,
      //     errorD
      //   });
      // }
    })
  }

  getDataOnePokemons(){
    fetch("http://localhost:4242/pokemons/:id").then(res => { 
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
    fetch("http://localhost:4242/pokemons").then(res => { 
      res.json()
     .then(data => {
      this.setState({
      // isLoaded: true,
        get: data,
      //  getOne:res2
      //mergedData:data
     })
     
    })
  })
    // this.getAllPokemons()
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

      // const listePokemon=this.state.get.forEach(element =>{
      //        console.log(`Data nom --> ${element.nom}`);
      //        console.log(`Data num --> ${element.numéro}`);
      //         <div class="card" >
      //         <img src ={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${element.numéro}.png`}/>
      //         <h1>#{element.numéro}</h1>
      //         <p>{element.nom}</p>
      //         </div>
      //     })
      
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
    
      const listePokemon=this.state.get.map((d)=>{
        //  console.log(`Data nom --> ${d.nom}`)
        //  console.log(`Data nom --> ${d.numéro}`)
         return(
          <div class="card" >
          <a href={`http://localhost:4242/pokemons/${d.idP}`} onClick="{this.state.activePokemonId=d.idP}">
          {console.log(this.state.activePokemonId)}
          <img src ={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${d.numéro}.png`}/>
          <h1>#{d.numéro}</h1>
          <p>{d.nom}</p>
          
          </a>
          </div>
         )
         
        })

      return (
        
        <div>
        <img src={ pokedex3d }/>
        <DarkMode />
        <div class="container">
          {listePokemon}              
          {/* <div class="card" >
            
              <img src ={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.get.numéro}.png`}/>
              <h1>#{this.state.get.numéro}</h1>
              <p>{this.state.get.nom}</p>
              
          </div> */}
        </div>
        </div>
      )
      
    }
  // }
}

export default App;
