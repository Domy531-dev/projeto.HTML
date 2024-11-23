const paginas ={
    "inicio": " Olá seja bem vindo no meu site",
    "sobre": "",
    "servicos": "<h1>criação de sites e manuteição", 
    "contato": "" ,
};

 let conteudo = window.document.getElementById('coteudo');
function navegarpara(pagina){
    conteudo.innerHTML = paginas[pagina];
} 