let display = document.querySelector('.display');
// console.log(display);


let buttons = [...document.querySelectorAll('.button')];
// let buttons = Array.from(document.querySelectorAll('.button'));
// console.log(buttons);


buttons.map( button => {
    button.addEventListener('click', function (event) {
        // console.log(event.target.innerText);

        switch(event.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += event.target.innerText;
        };
    });
});
