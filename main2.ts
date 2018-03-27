import { Observable } from "rxjs";

let numbers = [1, 5, 10];
let source = Observable.create((observer) => {

    numbers.forEach(element => {

        if(element === 5){
            observer.error('Algo salio mal');
        }
        observer.next(element);
    });

    observer.complete();
});

source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('Complete')
);