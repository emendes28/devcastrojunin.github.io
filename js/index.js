const user = 'TOYSTORE/administrator'

$('#goPlat').click((e) => {
    console.info('click');
    if (typeof (Worker) !== "undefined") {
        let apitocall = 'sso';
        callWebWork(apitocall);
    } else {
      console.error("Sorry! No Web Worker support.");
    }
});

$('#envioPedido').click((e) => {
    console.info('click');
    if (typeof (Worker) !== "undefined") {
        let apitocall = 'enviarEmail';
        callWebWork(apitocall);
    } else {
      console.error("Sorry! No Web Worker support.");
    }
});

const midiasescolhidas = $('itemsSelected').val();
function callWebWork(apitocall) {
    let w;
    var channel = new MessageChannel();
    if (typeof (w) == "undefined") {
        w = new Worker("./js/webWorker.js");
        w.onmessage = function (event) {
            w.postMessage(`Recebemos um retorno do w ${event.data.result}`, [channel.port1]);
        };
        w.onerror = function (e) {
            w.postMessage(`Error: Line ${e.lineno} in ${e.filename}: ${e.message}`, [channel.port1]);
        };
        w.postMessage({ command: apitocall,user: user, midias : midiasescolhidas });
    }
}