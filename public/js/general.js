var tokenRegex = /[{(]?[0-9A-Fa-f]{8}[-]?([0-9A-Fa-f]{4}[-]?){3}[0-9A-Fa-f]{12}[)}]?/;

onload = function () {
  var token = document.getElementById('token');
  var generate = document.getElementById('generate');

  token.oninput = () => {
    generate.innerText = 'Login';
    let value = token.value;
    if(tokenRegex.exec(value)) {
      token.classList.add('uk-form-success');
      token.classList.remove('uk-form-danger');
    } else {
      token.classList.add('uk-form-danger');
      token.classList.remove('uk-form-success');
    }
  }
}

function generate() {
  console.log('generate');
}
