import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { CardRulesComponent } from '../card-rules/card-rules.component';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule, MatDialogModule, CardRulesComponent, MatCardModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})


export class GameComponent {
  isTaken = false;
  game!: Game;
  currentCard: string = "";
  cardsLeft: number = 50;
  cardsLeftArray: number[] = [];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.newGame();
    this.cardStackDisplaySize()
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
    setTimeout(() => {
      this.isTaken = false;
    }, 1200);
    this.game.CurrentPlayer = (this.game.CurrentPlayer + 1) % this.game.Players.length;
    this.cardStackDisplaySize()
  }

  cardStackDisplaySize() {
    this.cardsLeft = this.game.Stack.length;
    this.cardsLeftArray = [];
    if (this.cardsLeft < 6) {
      for (let i = 0; i < this.cardsLeft; i++) {
        this.cardsLeftArray.push(i);
      }
    }else {
      this.cardsLeftArray = [0,1,2,3,4,5]
    }
  }

  newGame() {
    this.game = new Game();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name) {
        this.game.Players.push(name);
      }
    });
  }

}
