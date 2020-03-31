// trabalhando com CLASSES

// class List {
//     // sera o primero metodo a ser executado toda vez que uma nova classe for instaciada
//     // e possivel criar acoes que disparam assim que o objeto é criado ou tambem iniciar variaveis
//     constructor() {
//        this.data = [];
// 
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data, this.name);        
//     }    
// }
// 
// class TodoList extends List { // classe TodoList extende (herda) as propriedades da classe List
//     constructor () {
//         super();  // chama o constructor da classe pai
//         this.name = 'Mimimi';
//     }
// }
// 
// var MinhaLista = new TodoList();
// 
// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('data');
// }


// METODOS ESTATICOS
// não precisa dar um new na classe para chamar algum metodo dela
// não enxergam o resto classe onde estão inseridos: por ex. variaveis criadas fora do metodo estatico
// 
// class Matematica {
//     static soma (a, b) { //metodos estaticos não precisa definir uma nova classe 
//         return a + b;
//     }
// }
// 
// console.log(Matematica.soma(1, 2));


// CONST E LET

// const a = 1; // ready only
// a = 2  >> Uncaught TypeError: Assignment to constant variable

// mutação >> aceita que se altere uma propriedade dentro da variavel

// const usuario = {nome: 'Malu'};
// usuario.nome = 'Sara'; 

// console.log(usuario)

// function teste(x) {
//     let y = 2; // variavel só pode ser acessa dentro do escopo { } onde está inserida 
//     if (x > 5) {
//         console.log(x, y);
//     }
// }
// 
// teste(10);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 
// const newArr = arr.map(function(item) { // funcao map() percorre todos os items do vetor e executa alguma instrucao
//     return item * 2;
// });
// 
// console.log(newArr);
// 
// const sum = arr.reduce(function(total, next) { // funcao reduce() percorre todo o vetor e retorna um um valor
//     return total + next; // 1 + 2 + 3 ...
// }); 
// 
// console.log(sum); 
// 
// 
// const filter = arr.filter(function(item){
//     return item % 2 === 0 // funcao filter() percorre o array e retorna os elementos de acordo com alguma condicao 
// }
// )
// 
// console.log(filter); 
// 
// const find = arr.find(function(item) { // funcao find() percorre o array e retorna o elemento que atende uma determinada condicao
//     return item === 7;
// });
// 
// console.log(find); 

// ARROW FUNCTION

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 
// const newArr = arr.map(item => item * 2) // funcoes anonimas podem ser escritas no formato arrow function 
// 
// console.log(newArr);
// 
// const teste = () => 'teste 1 2 3' 
// 
// console.log(teste());
// 
// const nome = () => ({nome : 'Joao', nome: 'Maria'}); // quando retornar um objeto que possua { } esse objeto deve estar entre ()
// 
// console.log(nome); 

// VALORES PADRÃO

// function soma(a = 3, b = 6) {
//     return a + b;
// }
// 
// console.log(soma(1, 2)); // recebe a = 1 o b = 2
// console.log(soma(1));    // recebe a = 1 e soma ao valor padrão de b
// console.log(soma());     // não recebe nenhum valor >> considera o valor padrao a = 3 e b = 6
// 
// const soma2 = (a = 2 , b = 3) => a + b;
// 
// console.log(soma2(1)); // recebe a = 1 o b = 3
// console.log(soma2());  // não recebe nenhum valor >> considera o valor padrao a = 2 e b = 3

//// DESESTRUTURACAO
// 
// const usuario = {
//     nome: 'Maricota',
//     idade: 23,
//     endereco: {
//         cidade: 'Recife',
//         estado: 'Pernambuco'
//     }
// }
// 
// console.log(usuario.nome);
// console.log(usuario.idade);
// console.log(usuario.endereco.cidade);
// 
// const { nome, idade, endereco: {cidade}} = usuario; // cria duas novas constantes a partir da desestruturacao da contante usuario
// 
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// 
// function mostraNome(usuario) {
//     console.log(usuario.nome);
// }
// 
// mostraNome(usuario);
// 
// function mostraNome({nome, idade}) { // recebe usuario e desestrutura a constante usuario em duas novas variaveis: nome e idade
//     console.log(nome, idade);
// }
// 
// mostraNome(usuario);


// REST E SPREAD

// const usuario = {
//     nome: 'Maricota',
//     idade: 72,
//     cidade: 'Boa Viagem'
// }
// 
// const { nome, ...resto } = usuario; // desestrutura a constante usuario em nome e resto que é igual a idade e cidade
// 
// console.log(nome);
// console.log(resto); 
// 
// const arr = [1, 2, 3, 4];
// 
// const [ a, b, ...c ] = arr; // desestrutura a constante arr em a, b e c que é igual a 3 e 4
// 
// console.log(a);
// console.log(b);
// console.log(c);
// 
// function soma(a, b, c) {
//     return a + b + c;
// }
// 
// console.log(soma(1, 2, 3));
// 
// function soma(...params) { // variavel batata recebe um numero indeterminado de parametros e executa a função
//     return params.reduce((total1, next) => total1 + next);
// }
// 
// console.log(soma(1, 2, 3, 4, 5, 6, 7, 8));

// SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [3, 4, 5];
// 
// const arr3 = [...arr1, ...arr2]; // retorna todos os elementos do arr1 e todos os elementos do arr2 crando o novo objeto arr3
// 
// console.log(arr3);
// 
// const usuario1 = {
//     nome: 'Maricota',
//     idade: 72,
//     cidade: 'Boa Vista'
// }
// 
// const usuario2 = {...usuario1, nome: 'Mariazinha'}; //retorna todas as informações de usuario e substitui o valor do atributo nome original 'maricota' pelo valor 'mariazinha'
// 
// console.log(usuario2);

// TEMPLATE LITERAL

// const nome = 'maricota';
// const idade = 72;
// 
// console.log('O nome dela é ' + nome + ' e tem ' + idade);
// console.log(`Ela se chama ${nome} e tem ${idade}`);

// OBJECT SHORT SINTAX

const rua = 'avenida paulista';
const numero = 1200;

const endereco = {
    rua: rua,
    numero: numero
}

console.log(endereco);

const endereco2 = { // quando o nome da variavel é igual ao nome da propriedade nao e nessario fazer a atribuicao
    rua,
    numero
}

console.log(endereco2)






