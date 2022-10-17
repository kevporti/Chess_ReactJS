export default class Referee {
  boxIsOccupied(XCoord, YCoord, boardState) {
    const piece = boardState.find((piece) =>
      piece.x === XCoord && piece.y === YCoord ? piece : undefined
    );
    if (piece) {
      return true;
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
      } else if (
        previousXCoord === nextXCoord &&
        nextYCoord - previousYCoord === pawnDirection
      ) {
        if (!this.boxIsOccupied(nextXCoord, nextYCoord, boardState)) {
          return true;
        }
      }
    }
  }
}
