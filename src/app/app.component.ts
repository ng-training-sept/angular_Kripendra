import { Component } from '@angular/core';
//import {CommonModule} from '@angular/comman';
import { CardComponent } from './components/card/card.component';

@Component({   // yo class as a component register gara
  selector: 'app-root',   // unique selector (this is an entry point)
  standalone: true,
  imports: [CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';
}
