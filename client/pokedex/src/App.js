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
          console.log(result)
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
                {/* pb avec la recup des infos avec le this.state.get */}
                  <img src ={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.state.get.numéro}.png`}/>
                  <h1>#{this.state.get.numéro}</h1>
                  <p>{this.state.get.nom}</p>
                </div>
              </div>
              </div>
          
              
              
        )
    }
  // }
}

export default App;
