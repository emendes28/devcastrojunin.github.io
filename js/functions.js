const endpoint = 'http://localhost:8080';
const xmlHttp = new XMLHttpRequest();
function enviarEmail(midias=[],user='LOJA/usuario') {
    xmlHttp.open("GET", `${endpoint}/email`, false); 
    xmlHttp.send({"escolhas" : midias, "usuario" : user});
    return xmlHttp.responseText;
};
function sso(user='LOJA/usuario') {
    xmlHttp.open("POST", `${endpoint}/sso`, false); 
    xmlHttp.send({ "usuario" : user});
    return xmlHttp.responseText;
};