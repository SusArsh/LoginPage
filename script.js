let email = document.getElementById('exampleInputEmail1');
let password = document.getElementById('exampleInputPassword1');
let submit = document.getElementById('submit');
let form=document.getElementById('form')
let item = {};
// let request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:3000/user');
// request.send()
//     request.onreadystatechange = function() {
//       if (request.readyState === 4) {
//        item = JSON.parse(request.responseText);
       
//       }
//     }

  

function login (){
  let result = fetch('http://localhost:3000/user');{
    method: 'POST';
    body: JSON.stringify(item)
    headers: {
      'Content-Type','application/json';
    }
  }
  result = result.json();

  localStorage.setItem(JSON.stringify(result));
  history.push('/add');
  
}

email.addEventListener('change', function (e) {
  e.preventDefault;
  console.log(e.target.value);

})

password.addEventListener('change', function (e) {
  e.preventDefault;
  console.log(e.target.value);
})


form.addEventListener('submit', function (e) {
  e.preventDefault();
  if(email.value === 'eve.holt@reqres.in' && password. value === 'cityslicka'){
    localStorage.setItem("token","QpwL5tke4Pnpja7X4");
    window.location.replace('profile/profilePage.html') 
    
  }else{
    alert('Your datas are incorrect!');
  }
})



