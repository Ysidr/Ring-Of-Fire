import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { CardRulesComponent } from '../card-rules/card-rules.component';
import {MatCardModule} from '@angular/material/card';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

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

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newGame();
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
