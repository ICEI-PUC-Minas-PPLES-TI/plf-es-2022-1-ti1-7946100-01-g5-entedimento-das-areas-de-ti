//Dados de cursos
var db_cursos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Ciências da Computação",
            "descricao": "Como cientista da computação, você estuda, desenvolve e administra soluções de software, programas, aplicativos e sistemas para computadores e diversos outros dispositivos. Ela é dividida em quatro áreas principais: sistemas de software, sistemas de hardware, teoria da computação e computação científica",
            "video_apresentacao": "https://www.youtube.com/watch?v=rRixHV6hts0"
        },
        {
            "id": 2,
            "nome": "Engenharia de software",
            "descricao": "",
            "video_apresentacao": "https://www.youtube.com/watch?v=rRixHV6hts0"
        },
        {
            "id": 3,
            "nome": "Sistemas da Informação",
            "descricao": "",
            "video_apresentacao": "https://www.youtube.com/watch?v=rRixHV6hts0"
        },
        {
            "id": 4,
            "nome": "Engenharia da Computação",
            "descricao": "",
            "video_apresentacao": "https://www.youtube.com/watch?v=rRixHV6hts0"
        }
    ]
}

var db_universidades_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "PUC MINAS",
            "curso_id": 1,
            "descricao": "lorem",
            "preco": 900.00,
            "url": 'https://www.pucminas.br/vestibular/ead/Paginas/default.aspx'
        }
    ]
}


var db_data = [
    db_cursos_inicial, //position 0
    db_universidades_inicial, //position 1
]

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

window.onload = () => {
    var populated = localStorage.getItem('db_populated');
    if(populated == 'false' || !populated){
        
        localStorage.setItem('db_populated', true);;
        db_data.map(function(e, i) {
            switch(i){
                case 0: //inserindo cursos
                    insertData(e.data, 'db_cursos');
                    break;
                case 1: //inserindo universidades
                    insertData(e.data, 'db_universidades');
                    break;
            }   
            
        });
           
        window.location.reload;
    }
    this.verificaLogado();
}

function insertData(data, db){
    data.map(e => {
        datas = JSON.parse(localStorage.getItem(db));
        if(datas){ //Caso tenha cursos cadastrados, adiciona um curso no array
            datas.push(e);
        }else{ //Caso não tenha, seta o curso como o primeiro
            datas = [e];
        }
        localStorage.setItem(db, JSON.stringify(datas));
    })
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria,
    db.data[index].website = contato.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function verificaLogado(){
    let usuario = sessionStorage.getItem('usuarioCorrente');
    if(!usuario || usuario == '{}'){
        if(document.location.href.split('/')[2] == 'icei-puc-minas-pples-ti.github.io'){
            document.location.href != "/plf-es-2022-1-ti1-7946100-01-g5-entedimento-das-areas-de-ti/codigo/views/login/login.html" ?document.location.href = "/plf-es-2022-1-ti1-7946100-01-g5-entedimento-das-areas-de-ti/codigo/views/login/login.html" :null;
        } else {
            document.location.href != "/codigo/views/login/login.html" ?document.location.href = "/codigo/views/login/login.html" :null;
        }
       // 
    }
}
