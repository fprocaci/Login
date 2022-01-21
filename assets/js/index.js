document.getElementById('btn-enviar').addEventListener('click', e => {
    console.log('Teste do click!!!');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();
    
    let email = document.querySelector('#email').value;

    let password = document.querySelector('#password').value;

    console.log(email, password);

    let json = {
        email,
        password
    }

    console.log(json);

    let stringJava = JSON.stringify(json);

    console.log(stringJava);

    if(!json.email){
        console.log('Digite o email!!!');
    }else if(!json.password){
        console.log('Digite o password!!!');
    }else{
        console.log('Autenticação válida!!!');
    }
});