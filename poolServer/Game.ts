
export class Game {
     gameType: GameType
     solidPlayerId: string 
     stripesPlayerId: string 
     gameId: string 


    constructor(gameType: GameType, gameId: string, solidPlayerId: string, stripePlayerId: string) {
        this.gameType = gameType;
        this.gameId = gameId;
        this.solidPlayerId = solidPlayerId;
        this.stripesPlayerId = stripePlayerId;

    }



}
enum GameType {
    NORMAL,
    EIGHTBALL,
    NINEBALL
}




