const { Worker, isMainThread, parentPort }  = require('worker_threads');

if (isMainThread) {
    const worker =  new Worker(__filename);
    worker.once('message', (message) => { // worker escuta a mesagem
        console.log(message); // prints 'Worker thread: Hello!'
    });

    worker.postMessage('Main Thread: Hi!'); // manda mensagem para a thread
} else {
    parentPort.once('message', (message) => { //ecuta mensagem
        console.log(message) // prints 'Main Thread: Hi!'
        parentPort.postMessage("Worker thread: Hello!"); // mensagem para parent
    });
}