import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({   // yo class as a component register gara
  selector: 'app-root',   // unique selector (this is an entry point)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {

  observable!: Observable<number>;
  subscription!: Subscription;

  ngOnInit(): void {
    // initializing an observable
    this.observable = new Observable(subscriber => {
      // emitting next value
      subscriber.next(101);
      // emitting value 5 after 5 seconds
      setTimeout(() => subscriber.next(5), 5000);
      subscriber.next(1);
      setTimeout(() => {
        // after 7 seconds emitting value 66
        subscriber.next(66);
        // after 7 seconds completing the observable meaning observable is done emitting the value
        subscriber.complete();
      }, 7000);
    });

    this.subscription = this.observable.subscribe(value => console.log(value));
  }

}
