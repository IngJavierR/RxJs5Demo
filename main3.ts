import { Observable } from "rxjs";

let source = Observable.fromEvent(document, 'mousemove')
                       .map((event: MouseEvent) => {
                            return {
                                x: event.clientX,
                                y: event.clientX
                            }
                       })
                       .filter(el => {
                           return el.x > 600;
                       })

source.subscribe(
    value => console.log(value),
    error => console.log(`error: ${error}`),
    () => console.log('Complete')
);