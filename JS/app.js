"use strict"

function inicio() {
    //Comprobación de vinculación
    console.log("Js cargado correctamente");


    //Crear la interfaz usando el DOM
    document.getElementsByTagName("body")[0].innerHTML =
        "<div class='container'><div class='logoDiv'><img id='logo' src='./media/logo.png'></div><form id='formLoginSignup' action='./PHP/login.php' method='POST'><div class='formDiv'><div><div class='credDiv'><label for='user'>Usuario</label><input id='userLogin' type='text' name='user' value='ASPIRANTE' required></div><div class='credDiv'><label for='password'>Password</label><input id='passLogin' type='password' name='password' placeholder='******' required></div></div></div><div class='buttonsDiv'><input id='loginButton' type='submit' value='Login' name='login'><input id='registroButton' type='button' value='Registro' name='registro'></div></form></div>";


    //Gestión botones login y registro

    const loginButton = document.querySelector('#loginButton');
    const registroButton = document.querySelector('#registroButton');

    //Evento click en boton login
    loginButton.addEventListener('click', login);

    //Evento click en boton registro
    registroButton.addEventListener('click', () => {
        document.getElementById('formLoginSignup').action = "./PHP/signup.php";
        registro();
    });

}

function registro() {

    //creamos un mensaje emergente para solicitar la contraseña
    //y lo sustituimos por el form
    document.querySelector('#formLoginSignup').innerHTML = "<div class='divSignUp'><h2>Ingrese la contraseña que va a utilizar, el sistema le generará una cuenta automáticamente</h2><br><label for='password'>Password</label><input id='passSignUp' type='password' name='password' placeholder='******' required minlength='6'><input type='submit' name='btnSignUp' value='Registro' id='registro'><input type='button' name='btnLogin' value='Login' id='login'></div>";

    //Añadimos listeners a los botones
    document.querySelector('#login').addEventListener('click', inicio);

    document.querySelector('#registro').addEventListener('click', realizarRegistro);
}

function realizarRegistro(e) {
    const pass = document.querySelector('#passSignUp').value;

    if (pass.length < 6) {
        e.preventDefault();
        alert("La contraseña debe tener mínimo 6 caracteres");
        
    } else {
        console.log("Contraseña superior a 6 caracteres");
        document.getElementById('formLoginSignup').submit();
    }
    

}

async function login(e) {
    e.preventDefault();
    //Constantes de valores de los inputs
    const user = document.querySelector('#userLogin').value;
    const password = document.querySelector('#passLogin').value;
    //validación de campos vacíos





}

window.onload = inicio;

