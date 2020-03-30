var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos'));

//var todos = ['a', 'b', 'c'];

function renderTodos() {
    listElement.innerHTML = '';
    for(todo of todos) {

        var todoElement = document.createElement('li'); // cria elemento li
        var todoText = document.createTextNode(todo);   // cria elemento text

        todoElement.appendChild(todoText);    // todoText é filho do todoElement
        listElement.appendChild(todoElement); // lista cada item do toElement

        console.log(todoText);


        var linkElement = document.createElement('a');      // cria elemento a
        var linkText = document.createTextNode('Excluir');  // cria elemento text 

        linkElement.setAttribute('href','#');   // seta os atributos href e # para o elemento a 
             
        linkElement.appendChild(linkText);      // linkText é filho do linkElement    
        listElement.appendChild(linkElement);   // lista cada um dos LinkText

        console.log(linkText)

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText)
    inputElement.value = "";
    renderTodos();
    saveToStorage(); 
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}


