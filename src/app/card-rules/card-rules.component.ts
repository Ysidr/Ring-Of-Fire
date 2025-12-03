import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-rules',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './card-rules.component.html',
  styleUrl: './card-rules.component.scss'
})
export class CardRulesComponent {

  
  @Input() card! :string;
  show:boolean = false;

  title:string = "";
  description:string = "";

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: '' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: '' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
    { title: 'Joker', description: 'Choose as many People as you want, all of them have to drink.' },
    { title: 'Joker', description: 'Choose as many People as you want, all of them have to drink.' },
  ];

  ngOnChanges(): void {
    if(!this.card) return;
    let cardNumber = +this.card.split('_')[0];
    this.title = this.cardAction[cardNumber-2].title;
    this.description = this.cardAction[cardNumber-2].description;
    this.show = true;
  }
}


