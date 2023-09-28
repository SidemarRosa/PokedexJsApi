//variaveis e constantes
const offset = 0
const limmit = 10
const url = `https://pokemon.co/api/v2/pokemon?offset=${offset}&limmit=${limmit}`


var a = 0;
var b = a+1;

console.log(b);

// Função para requisição da api
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`A solicitação falhou com o código de status ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Manipule os dados da resposta aqui
    console.log('Dados da resposta:', data);
  })
  .catch(error => {
    // Trate erros aqui
    console.error('Erro na solicitação:', error);
  });

