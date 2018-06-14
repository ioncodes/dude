function register() {
  token.value = '??';
  generate.innerText = 'Login';
}

function login() {
  console.log("login");
}

function toggle() {
  token.hidden = !token.hidden;
  if(token.hidden) {
    toggleBtn.innerText = 'Show';
  } else {
    toggleBtn.innerText = 'Hide';
  }
}

onload = function () {
  var token = document.getElementById('token');
  var generate = document.getElementById('generate');
  var toggleBtn = document.getElementById('toggleBtn');

  token.oninput = () => {
    let value = token.value;
    if(value == '') {
      generate.innerText = 'Register';
      generate.onclick = register;
      return;
    } else {
      generate.innerText = 'Login';
      generate.onclick = login;
    }
  }
}
