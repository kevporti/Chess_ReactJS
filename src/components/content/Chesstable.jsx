import Tile from "./Tile";
import { useRef } from "react";

export default function Chesstable() {
  // Declaration of variables used in this Chesstable function
  let horizontalPosition = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let verticalPosition = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let table = [];
  let pieces = [];
  let activePiece = null;
  const chessTableRef = useRef(null);

  class Piece {
    constructor(image, tablePosition, x, y) {
      this.image = image;
      this.tablePosition = tablePosition;
      this.x = x;
      this.y = y;
    }
  }

  // Setting start position of the pieces in the chess table
  function startPositionOfPieces(x) {
    if (x === 0 || x === 7) {
      return "rook";
    } else if (x === 1 || x === 6) {
      return "knight";
    } else if (x === 2 || x === 5) {
      return "bishop";
    } else if (x === 3) {
      return "queen";
    } else if (x === 4) {
      return "king";
    }
  }

  // Setting an active piece if the player selected one to move and setting the coordinates using mouse cooords
  function grabPiece(e) {
    const piece = e.target;
    if (piece.classList.contains("piece")) {
      const x = e.clientX - 25;
      const y = e.clientY - 25;

      piece.style.position = `absolute`;
      piece.style.top = `${y}px`;
      piece.style.left = `${x}px`;

      activePiece = piece;
    }
  }

  function movePiece(e) {
    const chessTable = chessTableRef.current;
    if (activePiece && chessTable) {
      // Variables to know the min/max of the chessTable positions
      const minX = chessTable.offsetLeft - 25;
      const minY = chessTable.offsetTop - 25;
      const maxX = chessTable.offsetLeft + chessTable.clientWidth - 75;
      const maxY = chessTable.offsetTop + chessTable.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;

      // Styling to not let the pieces go beyond the boundaries of the chessTable
      activePiece.style.position = `absolute`;
      activePiece.style.left =
        x < minX ? `${minX}px` : x > maxX ? `${maxX}px` : `${x}px`;
      activePiece.style.top =
        y < minY ? `${minY}px` : y > maxY ? `${maxY}px` : `${y}px`;
    }
  }

  function dropPiece(e) {
    if (activePiece) {
      activePiece = null;
    }
  }

  // Adding all the pieces to the table at the start position
  for (let blackOrWhite = 0; blackOrWhite < 2; blackOrWhite++) {
    let colorOfPiece = blackOrWhite === 0 ? "w" : "b";
    let yPositionDifferentPieces = blackOrWhite === 0 ? 0 : 7;
    let yPositionPawnPieces = blackOrWhite === 0 ? 1 : 6;

    for (let x = 0; x < 8; x++) {
      // Adding king, major y minor pieces
      pieces.push(
        new Piece(
          `assets/images/${startPositionOfPieces(x)}_${colorOfPiece}.png`,
          `${horizontalPosition[x]}${yPositionDifferentPieces}`,
          x,
          yPositionDifferentPieces
        )
      );
      // Adding pawn pieces
      pieces.push(
        new Piece(
          `assets/images/pawn_${colorOfPiece}.png`,
          `${horizontalPosition[x]}${yPositionPawnPieces}`,
          x,
          yPositionPawnPieces
        )
      );
    }
  }

  // This function returns a style to add to intercalated boxes in the chess table
  function intercalateColorsOfTable(i, j) {
    let blackBoxStyle = "bg-blackbox text-white";

    if ((i + j) % 2 === 0) {
      return blackBoxStyle;
    }
  }

  // This creates the boxes of the chess board using horizontal and vertical positions.
  for (let j = verticalPosition.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalPosition.length; i++) {
      let image = undefined;
      let position = horizontalPosition[i] + verticalPosition[j];

      pieces.forEach((piece) => {
        if (piece.x === i && piece.y === j) {
          image = piece.image;
        }
      });

      table.push(
        <div
          key={`${position}`}
          className={`flex justify-center items-center h-24 w-24 ${intercalateColorsOfTable(
            i,
            j
          )}`}
        >
          <Tile position={position} image={image} />
        </div>
      );
    }
  }

  return (
    <div className="grid place-content-center">
      <div className="flex p-16 bg-whitebox">
        <div
          onMouseMove={(e) => movePiece(e)}
          onMouseDown={(e) => grabPiece(e)}
          onMouseUp={(e) => dropPiece(e)}
          ref={chessTableRef}
          className="grid grid-cols-8 outline outline-4 outline-blackbox h-48 w-48"
        >
          {table}
        </div>
      </div>
    </div>
  );
}
