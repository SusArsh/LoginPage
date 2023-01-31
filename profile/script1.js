// let user = localStorage.getItem("user");
// if (user == null) {
//   window.location.href = './profilePage.html'
// }
let main = document.getElementById('container');
function loadUser() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://reqres.in/api/users/2');
  request.setRequestHeader("Content-Type", "application/json");

  request.send();
  request.onreadystatechange = function(){
  if (request.readyState === 4) {
    let data = JSON.parse(request.responseText)['data'];
    console.log(data);
    
      let div = document.createElement('div');
      let p = document.createElement('p');
      let image = document.createElement('img');
      image.setAttribute('src', data.avatar);
      div.append(image);
      p.innerHTML = ` ${data.first_name} ${data.last_name} <br> email: ${data.email}`;
      div.append(p)
      main.append(div);
     
  }
  }
}


loadUser();

function logout() {
  localStorage.removeItem("token","QpwL5tke4Pnpja7X4");
  window.location.href = '../index1.html'
}