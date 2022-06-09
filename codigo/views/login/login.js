
const LOGIN_URL = "login.html";

// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


function loginUser(login, senha) {
    var db_usuarios = JSON.parse(localStorage.getItem('db_usuarios'));
    for (var i = 0; i < db_usuarios.length; i++) {
        var usuario = db_usuarios[i];
        
        if (login == usuario.login && senha == usuario.senha) {
            usuarioCorrente = {
                'id':usuario.id,
                'login':usuario.login,
                'email':usuario.email,
                'nome':usuario.nome,
                'isAdm':usuario.isAdm
            };
            
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            return true;
        }
    }

    return false;
}

function logoutUser () {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
    window.location = LOGIN_URL;
}

function addUser (nome, login, senha, email) {

    var db_usuarios = JSON.stringify (db_usuarios);
    

    let usuario = { "id": db_usuarios.at(-1).id + 1, "login": login, "senha": senha, "nome": nome, "email": email, "isAdm":false };
    
    db_usuarios.push(usuario);

    localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
}

function setUserPass () {

}

initLoginApp ();