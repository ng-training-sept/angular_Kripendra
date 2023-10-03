import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports:[CardComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  name: string = "Kripendra";
  contact: number = 7896;
  profile = {
    name: {
      fname: 'xyz',
    lname: "martin"
    },
    age: 36
  };

  title: string = 'Data binding';
  port: number = 1234;

  server: 
  {id: number, status: string} = {id: 10, status: 'offline'};


    isButtonDisabled: boolean = true;
    toggleDisabled(): void{
      this.isButtonDisabled = !this.isButtonDisabled;
    }
}
