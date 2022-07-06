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

function getUrl(){
    let splitted = document.location.href.split('/');
    if(splitted.includes('icei-puc-minas-pples-ti.github.io')){
        return splitted[0]+'/'+splitted[1]+'/'+splitted[2]+'/'+splitted[3]+'/';
    }
    return splitted[0]+'/'+splitted[1]+'/'+splitted[2]+'/';
}

$("#home-button" ).click(function() {
    window.location.href = getUrl()+'codigo/views/index.html';
  });