import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent {
  constructor() {
    // this.returnObservable()
    //   .pipe(retry(1))
    //   .subscribe(
    //     (value) => console.log('subs', value),
    //     (error) => console.log('error', error),
    //     () => console.info('finished')
    //   );

    this.returnInterval().subscribe((value) => console.log(value));
  }

  returnInterval(): Observable<number> {
    return interval(1000).pipe(
      take(10),
      
      map((value) => {
        return value + 1;
      })
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          i = 0;
          console.error('valor 2 ilevgal');
        }
      }, 1000);
    });

    return obs$;
  }
}
