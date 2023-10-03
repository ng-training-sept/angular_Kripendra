import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { Card } from 'src/app/components/card/card.model';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent]
})


export class SportsComponent implements OnInit {

  sportCards: Card[] = [];
  private readonly http = inject(HttpClient);

  ngOnInit(): void{
    this.http.get<Card[]>(`${environment.baseUrl}/sports`).subscribe(sports => {this.sportCards = sports});

    this.http.post(`${environment.baseUrl}/sports`, {
      id:'12',
      name: 'Cricket Bat',
      imageUrl: '',
      price: 1567,
      description: 'This is a cricket bat'
    }).subscribe(response => console.log(response));
  }
}

  
