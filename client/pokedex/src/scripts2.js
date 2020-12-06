import './style.css'
import './styleDark.css'
import React from 'react'

class scripts2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:4242/pokemons/:id")
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result.pokemons);
              this.setState({
                isLoaded: true,
                items: result.pokemons
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            return (
                <div className="scripts2">
                <header className="scripts2-header">
                    <img src={imgPokemon} className="scripts2-imgPokemon" alt="image du pokemon" />
                </header>
                <h2>Identité</h2>
                <table style="width:100%">
                <tr>
                    <td>Couleur</td>
                    <td>Espece</td> 
                    <td>Type1</td>
                    <td>Taille</td>
                    <td>Poids</td>
                    <td>Forme</td>
                </tr>
                <tr>
                    <td>{this.state.items.couleur}</td>
                    <td>{this.state.items.espece}</td>
                    <td>{this.state.items.type1}</td>
                    <td>{this.state.items.taille}</td>
                    <td>{this.state.items.poids}</td>
                    <td>{this.state.items.forme}</td>
                </tr>
                </table>
                </div>
            )
        }
      }
}

export default scripts2

