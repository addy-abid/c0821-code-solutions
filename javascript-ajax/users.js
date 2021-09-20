var users = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  var response = xhr.response;
  console.log(response);
  for (var i = 0; i < response.length; i++) {
    var list = document.createElement('li');
    list.textContent = response[i].name;
    users.appendChild(list);
  }
});
xhr.send();
