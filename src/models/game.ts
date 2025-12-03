export class Game {
    public Players: string[] = ['Normen', 'Max', 'Finn', 'Lukas'];
    public Stack: string[] = [];
    public LayedCards: string[] = [];
    public CurrentPlayer: number = 0;

    constructor() {
        for (let i = 2; i < 15; i++) {
            this.Stack.push(i + "_of_hearts");
            this.Stack.push(i + "_of_diamonds");
            this.Stack.push(i + "_of_clubs");
            this.Stack.push(i + "_of_spades");

        } 
        addSpecialCards(this);
        shuffleArray(this.Stack);
    }
}

function addSpecialCards(game: Game) {
    game.Stack.push("15_joker");
    game.Stack.push("16_joker");
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
