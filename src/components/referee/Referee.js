export default class Referee {
  isValidMove(
    previousXCoord,
    previousYCoord,
    nextXCoord,
    nextYCoord,
    typeOfPiece,
    teamType
  ) {
    //Separating options between teams
    if (teamType === "w") {
      //Pawn movement
      if (typeOfPiece === "pawn") {
        if (previousYCoord === 1) {
          if (
            (previousYCoord === nextYCoord - 1 ||
              previousYCoord === nextYCoord - 2) &&
            previousXCoord === nextXCoord
          ) {
            return true;
          }
        } else {
          if (
            previousXCoord === nextXCoord &&
            previousYCoord === nextYCoord - 1
          ) {
            return true;
          }
        }
      }
    } else if (teamType === "b") {
    }
  }
}
