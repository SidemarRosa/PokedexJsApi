//variaveis e constantes
const offset = 0
const limmit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&immit=${limmit}`

// Função fecth para requisição da api
fetch(url)
    //função de callback
    .then((response) => return response.json())   // transforma as strings do body da resposta da api em json com promisse de any
    .then((jsonBody) => console.log(jsonBody)) //modifica o nome para jsonbody
    .catch ((error) => console.error(error)) //tratamento de erro
    //finally quando preciso usar ------        .finally( () => console.log('requisição concluida')) //mensagem de finalização
   
    