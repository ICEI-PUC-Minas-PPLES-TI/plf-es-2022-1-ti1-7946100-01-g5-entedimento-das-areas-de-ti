function displayMessageDanger(msg) {
    $('#msg').html('<div class="alert alert-danger">' + msg + '</div>');
}

function displayMessageSuccess(msg) {
    $('#msg').html('<div class="alert alert-success">' + msg + '</div>');
}

$('#logout').click(() => {
    usuarioCorrente = {};
    sessionStorage.setItem ('usuarioCorrente', JSON.stringify(usuarioCorrente));
    window.location.reload();
});