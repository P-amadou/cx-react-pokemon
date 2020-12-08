
const app = document.getElementById('root')

const pokedexLogo = document.createElement('img')
pokedexLogo.src = 'pokedex3D.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(pokedexLogo)
app.appendChild(container)


var request=new XMLHttpRequest()

request.open('GET','http://localhost:4242/pokemons',true)

request.onload= function () {
    let data = JSON.parse(this.response)
    console.log('Reponse'+this.response);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
        data.forEach((pokemons) => {
            let pokemonImg=document.createElement('img')
            pokemonImg.src=`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemons.numéro}.png`
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
      
            const h1 = document.createElement('h1')
            h1.textContent = `#${pokemons.numéro}`
      
            const p = document.createElement('p')
            p.textContent = `${pokemons.nom}`
      
            container.appendChild(card)
            card.appendChild(pokemonImg)
            card.appendChild(h1)
            card.appendChild(p)
        });
    }else{
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `ERROR!`
        app.appendChild(errorMessage)
    }
}

request.send()

