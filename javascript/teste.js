let mudar = false;
let header = window.document.getElementsByTagName('header')[0];
let nav = window.document.getElementsByTagName('nav')[0];
let divMenu = window.document.getElementById('menu');
let divBotoes = window.document.getElementById('botoes');
let btnMenu = window.document.getElementById('btn-menu');
let btnHome = window.document.getElementById('btn-home');
let btnConfiguracoes = window.document.getElementById('btn-configuracoes');
let btnTema = window.document.getElementById('btn-tema');
let btnPerfil =  window.document.getElementById('btn-perfil');
let divPerfil = window.document.getElementById('perfil');
let imgUsuario = window.document.getElementById('img-usuario');
let txtMenu = window.document.getElementsByTagName('span')[0];
let txtHome = window.document.getElementsByTagName('span')[1];
let txtConfiguracoes = window.document.getElementsByTagName('span')[2];
let txtTema = window.document.getElementsByTagName('span')[3];
let txtPerfil = window.document.getElementsByTagName('span')[4];
let main = window.document.getElementsByTagName('main')[0];
let article = window.document.getElementsByTagName('article')[0];

function carregar(){
    nav.style.height = '31px';
    divBotoes.opacity = '0';
    divBotoes.style.padding = '6px';
    divBotoes.transitionDuration = '0px';
    // txtMenu.style.opacity = '0';
    // txtHome.style.opacity = '0';
    // txtConfiguracoes.style.opacity = '0';
    // txtTema.style.opacity = '0';
    // txtPerfil.style.opacity = '0';
    window.document.getElementsByTagName('span')[0].style.opacity = '0';
    
}

function Menu(){
    mudar = !mudar

    if(mudar == true){
        // header.style.transitionDuration = '2s'
        // nav.style.height = 'auto';
        divMenu.style.rowGap = '10px';
        divBotoes.style.transform = 'translateX(-10px)';
        divBotoes.style.backgroundColor = 'rgb(4, 4, 105)';
        divBotoes.style.opacity = '1';
        divBotoes.style.borderBottomRightRadius = '10px';
        divBotoes.style.padding = '6px';
        txtMenu.style.transitionDuration = '1s';
        txtMenu.style.opacity = '1';
        article.style.filter = 'blur(2px)';
        article.style.transitionDuration = '1s'
        // txtMenu.style.opacity = '1'
        // txtHome.style.opacity = '1';
        // txtConfiguracoes.style.opacity = '1';
        // txtTema.style.opacity = '1';
        // txtPerfil.style.opacity = '1';
    }else if(mudar == false){
        // nav.style.height = '40px';
        divBotoes.style.transform = 'translateX(-150%)'
        divBotoes.opacity = '0';
        txtMenu.style.opacity = '0';
        article.style.filter = 'blur(0px)'; 
        article.style.transition = '2s';
        // btnHome.style.opacity = '0';
        // btnConfiguracoes.style.opacity = '0';
        // btnTema.style.opacity = '0';
        // btnPerfil.style.opacity = '0';
    }
}

function tirarMenu(){
    mudar = !mudar

    if(mudar == false){
        // nav.style.height = '40px';
        divBotoes.style.transform = 'translateX(-150%)'
        divBotoes.opacity = '0';
        txtMenu.style.opacity = '0';
        article.style.filter = 'blur(0px)'; 
        article.style.transition = '2s';
    }
}