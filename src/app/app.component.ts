import {Component} from '@angular/core';

export interface Card {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-basics'
  toggle = true

  cards: Card[] = [
    {text: "Card 1 text", title: "Card 1"},
    {text: "Card 2 text", title: "Card 2"},
    {text: "Card last text", title: "Card last"}
  ]

  toggleCards() {
    this.toggle = !this.toggle
  }
}
