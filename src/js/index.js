// Criando variáveis
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

//Evento de clique colocado em todos os itens da lista, aguardando click para iniciar uma função.
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () =>{
    //Remover a classe aberto do cartão aberto atualmente
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    
    //Ao selecionar um pokémon da listagem, selecionar um id do pokemom responsavel de acordo
    const idPokemonSelecionado = pokemon.attributes.id.value
    
    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonparaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonparaAbrir.classList.add('aberto')
    
    //Removendo marcador de ativo dos pokemons não selecionados
    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')
    
    //Adicionando classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})
