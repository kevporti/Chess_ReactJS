import React from "react";

export default function Chesstable() {
  let horizontalPosition = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let verticalPosition = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let table = [];

  for (let j = verticalPosition.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalPosition.length; i++) {
      table.push(
        <div className="flex justify-center items-center border h-24 w-24">
          {horizontalPosition[i]}
          {verticalPosition[j]}
        </div>
      );
    }
  }

  return (
    <div className="grid place-content-center">
      <div className="grid grid-cols-8 h-48 w-48">{table}</div>
    </div>
  );
}
