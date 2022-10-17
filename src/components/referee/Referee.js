export default class Referee {
  boxIsOccupied(XCoord, YCoord, boardState) {
    const piece = boardState.find((piece) =>
      piece.x === XCoord && piece.y === YCoord ? piece : undefined
    );
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  boxIsOccupiedByOpponent(XCoord, YCoord, team, boardState) {
    const piece = boardState.find(
      (piece) => piece.x === XCoord && piece.y === YCoord && piece.team !== team
    );
    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  isValidMove(
    previousXCoord,
    previousYCoord,
    nextXCoord,
    nextYCoord,
    typeOfPiece,
    teamType,
    boardState
  ) {
    if (typeOfPiece === "pawn") {
      const firstMovementRow = teamType === "w" ? 1 : 6;
      const pawnDirection = teamType === "w" ? 1 : -1;

      //Movement logic. First if statement represents a movement of two spaces, validating the coords according to the team and direction of the piece.
      //Second one checks if there is any piece in the two spaces of movement that might unvalid the movement.
      if (
        previousXCoord === nextXCoord &&
        previousYCoord === firstMovementRow &&
        nextYCoord - previousYCoord === 2 * pawnDirection
      ) {
        if (
          !this.boxIsOccupied(nextXCoord, nextYCoord, boardState) &&
          !this.boxIsOccupied(
            nextXCoord,
            nextYCoord - pawnDirection,
            boardState
          )
        ) {
          return true;
        }
        //Movement logic. First if statement represents a movement of one space, validating the coords according to the team and direction of the piece.
        //Second one checks if the box of the movement is occupied or not, causing an invalidation of the movement.
      } else if (
        previousXCoord === nextXCoord &&
        nextYCoord - previousYCoord === pawnDirection
      ) {
        if (!this.boxIsOccupied(nextXCoord, nextYCoord, boardState)) {
          return true;
        }
        //Attack logic. Left corner checker.
      } else if (
        nextXCoord - previousXCoord === -1 &&
        nextYCoord - previousYCoord === pawnDirection
      ) {
        if (
          this.boxIsOccupiedByOpponent(
            nextXCoord,
            nextYCoord,
            teamType,
            boardState
          )
        ) {
          console.log("Oponent is being left attacked by pawn");
          return true;
        }
        //Attack logic. Right corner checker.
      } else if (
        nextXCoord - previousXCoord === 1 &&
        nextYCoord - previousYCoord === pawnDirection
      ) {
        if (
          this.boxIsOccupiedByOpponent(
            nextXCoord,
            nextYCoord,
            teamType,
            boardState
          )
        ) {
          console.log("Oponent is being right attacked by pawn");
          return true;
        }
      }
    }
  }
}
