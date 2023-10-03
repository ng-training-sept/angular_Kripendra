import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from 'src/app/components/card/card.component';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/app/environment';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
  standalone: true,
  imports: [CommonModule, CardComponent]
})
export class GroceryComponent implements OnInit {

  groceryCards: Card[] = [];
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Card[]>(`${environment.baseUrl}/grocery`).subscribe(response => this.groceryCards = response);
    // above for each grocery in grovery array obj tyo grocery laihamro groceryCards ma rakhcha.
  }
} 