import React from "react";

export default function Chesstable() {
  // Declaration of variables used in this Chesstable function
  let horizontalPosition = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let verticalPosition = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let table = [];

  // This function returns a style to add to intercalated boxes in the chess table
  function intercalateColorsOfTable(i, j) {
    let style = "bg-stone-900 text-white";

    if (i % 2 === 0) {
      if (j % 2 === 0) {
        return style;
      }
    } else if (j % 2 !== 0) {
      return style;
    }
  }

  // This function creates the boxes of the chess board using horizontal and vertical positions.
  for (let j = verticalPosition.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalPosition.length; i++) {
      table.push(
        <div
          className={`flex justify-center items-center h-24 w-24 ${intercalateColorsOfTable(
            i,
            j
          )}`}
        >
          {horizontalPosition[i]}
          {verticalPosition[j]}
        </div>
      );
    }
  }

  return (
    <div className="grid place-content-center">
      <div className="grid grid-cols-8 h-48 w-48 border-2 border-black">
        {table}
      </div>
    </div>
  );
}
