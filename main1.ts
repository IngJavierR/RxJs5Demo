import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];
let source = Observable.from(number);

source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);