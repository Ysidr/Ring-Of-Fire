export class Game {
    public Players: string[] = ['Normen', 'Max', 'Finn', 'Lukas'];
    public Stack: string[] = [];
    public LayedCards: string[] = [];
    public CurrentPlayer: number = 0;

    constructor() {
        for (let i = 2; i < 11; i++) {
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
    game.Stack.push("ace_of_hearts");
    game.Stack.push("ace_of_diamonds");
    game.Stack.push("ace_of_clubs");
    game.Stack.push("ace_of_spades");
    game.Stack.push("jack_of_hearts2");
    game.Stack.push("jack_of_diamonds2");
    game.Stack.push("jack_of_clubs2");
    game.Stack.push("jack_of_spades2");
    game.Stack.push("queen_of_hearts2");
    game.Stack.push("queen_of_diamonds2");
    game.Stack.push("queen_of_clubs2");
    game.Stack.push("queen_of_spades2");
    game.Stack.push("king_of_hearts2");
    game.Stack.push("king_of_diamonds2");
    game.Stack.push("king_of_clubs2");
    game.Stack.push("king_of_spades2");
    game.Stack.push("red_joker");
    game.Stack.push("black_joker");
}

function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
