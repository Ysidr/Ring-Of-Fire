import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  isTaken = false;
  game!: Game;
  currentCard: string = "";

  ngOnInit(): void {
    this.newGame();
    console.log(this.game);
  }


  takeCard() {
    if (this.isTaken) {
      return;
    }
    this.isTaken = true;
    this.currentCard = this.game.Stack.pop() || "";
    setTimeout(() => {
      this.game.LayedCards.push(this.currentCard);
    }, 1000);

    
    console.log(this.currentCard);
    setTimeout(() => {
      this.isTaken = false;
    }, 2000);
  }

  newGame() {
    this.game = new Game();
  }

}
