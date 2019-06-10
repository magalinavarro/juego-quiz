//Iniciar sesión y registrarse:

let login = function() {
    let usuario = document.getElementById("nick-name").value;
    let password = document.getElementById("pass-word").value;
    fetch("https://preguntadas.herokuapp.com/v1/users/login", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;  charset=UTF-8"
        },
        method: "post",
        body: JSON.stringify({
            username: usuario,
            password: password,
        })  
   }).then(function(result) {
        return result.json();
   }).then(function(result) {
    console.log(result);
    if (result.success) {
        alert(result.message);
    } else {
        alert(result.message);
    }
   
   }).catch(function(error) {
   
   });
}

let registrarse = function() {
    let usuario = document.getElementById("nickname").value;
    let password = document.getElementById("password").value;
fetch("https://preguntadas.herokuapp.com/v1/users/signin", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8"
     },
     method: "post",
     body: JSON.stringify({
         username: usuario,
         password: password,
     })  
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
    if (result.success) {
        alert(result.message);
    } else {
        alert(result.message);
    }
}).catch(function(error) {

});

}