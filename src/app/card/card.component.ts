import {Component, Input} from "@angular/core";
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card!: Card
  @Input() index!: number

  cardDate: Date = new Date()

  title = 'My Card title'
  text = 'SOme text'

  textColor?: string

  inputHandler(value: any) {
    // event: any
    // const value = event.target.value
    this.card.title = value
  }

  onTitleChange() {
    console.log("title", this.title)
  }
}
