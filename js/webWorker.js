importScripts('./functions.js');
self.onmessage = event => {
    switch (event.data.command) {
        case 'enviarEmail': {
            let result = enviarEmail(event.data.midias,event.data.user);
            break;
        }
        case 'sso': {
            let result = enviarEmail(event.data.user);
            break;
        }        
    }
    self.postMessage({ result });
    close(); 
}