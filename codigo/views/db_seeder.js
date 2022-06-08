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
        },
        {
            "id": 2,
            "nome": "UFMG",
            "curso_id": 1,
            "descricao": "lorem ipsun",
            "preco": 900.00,
            "url": 'https://www.pucminas.br/vestibular/ead/Paginas/default.aspx'
        }
    ]
}

var db_manchetes_inicial = {
    "data": [
        {
            "id": 1,
            "titulo": "4 tendências que vão moldar a engenharia de software em 2020",
            "paragrafo1": "A engenharia de software é um campo muito amplo, com grande potencial de desenvolvimento. Atualmente, a indústria de software possui muitos projetos, e é de se imaginar que outros vão surgir futuramente. Visando concentrar as novidades que podem aparecer nesse ramo, o The Next Web selecionou quatro tendências e previsões da engenharia de software para 2020.",
            "paragrafo2": "Considerada uma das tecnologias que mais cresce, o número de dispositivos IoT pode atingir a marca de 21 bilhões nos próximos anos. Como o mundo atual contempla a existência de diversos produtos inteligentes, desde celulares até eletrodomésticos e carros, o escopo do desenvolvimento de software tende a ser muito grande.",
            "img1": "1-1.jpg",
            "img2": "1-2.jpg",
            "curso_id": 1
        },

        {
            "id": 2,
            "titulo": "4 tendências que vão moldar a engenharia de software em 2020",
            "paragrafo1": "A engenharia de software é um campo muito amplo, com grande potencial de desenvolvimento. Atualmente, a indústria de software possui muitos projetos, e é de se imaginar que outros vão surgir futuramente. Visando concentrar as novidades que podem aparecer nesse ramo, o The Next Web selecionou quatro tendências e previsões da engenharia de software para 2020.",
            "paragrafo2": "Considerada uma das tecnologias que mais cresce, o número de dispositivos IoT pode atingir a marca de 21 bilhões nos próximos anos. Como o mundo atual contempla a existência de diversos produtos inteligentes, desde celulares até eletrodomésticos e carros, o escopo do desenvolvimento de software tende a ser muito grande.",
            "img1": "1-1.jpg",
            "img2": "1-2.jpg",
            "curso_id": 1
        },
    ]
}

var db_usuarios = {
    "data": [
        { 
            "id": 1,
            "login": "admin",
            "senha": "123",
            "nome": "Administrador do Sistema",
            "email": "admin@abc.com",
            "isAdm":true
        },
        { "id": 2, "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com","isAdm":false},
    ]
}


var db_data = [
    db_cursos_inicial, //position 0
    db_universidades_inicial, //position 1
    db_manchetes_inicial, //position 2
    db_usuarios,
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
                case 2:
                    insertData(e.data, 'db_manchetes');
                    break;
                case 3:
                    insertData(e.data, 'db_usuarios');
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

function verificaLogado(){
    let usuario = sessionStorage.getItem('usuarioCorrente');
    console.log(document.location.href );
    if((!usuario || usuario == '{}')){
        if(document.location.href.split('/')[2] == 'icei-puc-minas-pples-ti.github.io'){
            document.location.href.split('/')[2] != "/plf-es-2022-1-ti1-7946100-01-g5-entedimento-das-areas-de-ti/codigo/views/login/login.html" ?document.location.href = "/plf-es-2022-1-ti1-7946100-01-g5-entedimento-das-areas-de-ti/codigo/views/login/login.html" :null;
        } else {
            document.location.href.split('/')[6]  != "login.html" ?document.location.href = "/codigo/views/login/login.html" :null;
        }
       // 
    }
}
