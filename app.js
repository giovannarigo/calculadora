let calculadora = document.getElementById('calculadora');
let tecladoNumerico = document.getElementById('tecladoNumerico');

tecladoNumerico.addEventListener('click', e => {
    if (e.target.matches('button')) { 
        //faça algo
        const teclas = e.target;
        const action = teclas.dataset.action;
        if(!action) {
            console.log('number key');
        }
        if ( action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide' ||
            action === 'percentage' ||
            action === 'off'
        ) {
            console.log('operator key!');
        }
        
        if (action === 'decimal') {
            console.log('decimal key');
        }
        if (action === 'clear') {
            console.log('clear key');
        }
        if (action === 'calculate') {
            console.log('equal key');
        }
    }
})
