//////////  REQUISICOES AJAX

// var xhr = new XMLHttpRequest();
// 
// xhr.open('GET', 'https://api.github.com/users/fernandateruya')
// xhr.send(null);
// 
// xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//        console.log(JSON.parse(xhr.responseText));
//     }
// }

/////// TRABALHANDO COM PROMISSES

// var minhaPromisse = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/fernandateruya')
//         xhr.send(null);
// 
//         xhr.onreadystatechange = function() {
//             if(xhr.readyState === 4) {
//               if(xhr.status === 200) {
//                 resolve(JSON.parse(xhr.responseText));        
//               } else {
//                 reject('Erro na requisicao');
//               }
//             }
//         }      
//     });
// };
// 
// minhaPromisse()
// .then(function(response){   //quando a requisicao retornar resolve
//     console.log(response);
// })
// .catch(function(error){
//     console.warn(error);    //quando a requisicao retornar reject 
// })


/////// RESQUISIÇÕES USANDO AXIOS 

axios.get('https://api.github.com/users/fernandateruya')
.then(function(response){   //quando a requisicao retornar resolve
    console.log(response);
    console.log(response.data.avatar_url);
    console.log(response.data.repos_url);
})
.catch(function(error){
    console.warn(error);    //quando a requisicao retornar reject 
})



