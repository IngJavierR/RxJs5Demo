import { Observable } from "rxjs";

let output = document.getElementById('output');
let button = document.getElementById('button');
let unsuscribe = document.getElementById('unsuscribe');

var click = Observable.fromEvent(button, 'click');
var clickUnsuscribe = Observable.fromEvent(unsuscribe, 'click');

function add() {
    let div = document.createElement('div');
    div.innerText = 'Prueba';
    output.appendChild(div);
}

let clickSubs = click.subscribe(
    event => add(),
    error => console.log(`Error: ${error}`),
    () => console.log('Complete')
);

clickUnsuscribe.subscribe(() => {
    clickSubs.unsubscribe();
});

