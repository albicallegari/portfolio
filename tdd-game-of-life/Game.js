/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import Cell from './Cell';
import CellState from './CellState';

export default class Game {
  constructor(state) {
    this.numRows = state.length;
    this.numCols = state[0].length;
    this.state = state.map((row) =>
      row.map((cellState) => new Cell(cellState))
    );
  }

  getCell(row, col) {
    return this.state[row][col];
  }

  getNumberOfAliveNeighbors(row, col) {
    const stateValues = {
      [CellState.ALIVE]: 1,
      [CellState.DEAD]: 0,
    };

    const cellAbove = (rowNum, colNum) =>
      (colNum === col - 1 && rowNum === row - 1) ||
      (colNum === col && rowNum === row - 1) ||
      (colNum === col + 1 && rowNum === row - 1);

    const cellNext = (rowNum, colNum) =>
      (colNum === col - 1 && rowNum === row) ||
      (colNum === col + 1 && rowNum === row);

    const cellBelow = (rowNum, colNum) =>
      (colNum === col - 1 && rowNum === row + 1) ||
      (colNum === col && rowNum === row + 1) ||
      (colNum === col + 1 && rowNum === row + 1);

    let numNeighbors = 0;
    this.state.forEach((cellRow, rowNum) => {
      cellRow.forEach((cell, colNum) => {
        if (
          cellAbove(rowNum, colNum) ||
          cellNext(rowNum, colNum) ||
          cellBelow(rowNum, colNum)
        ) {
          numNeighbors += stateValues[cell.state];
        }
      });
    });
    return numNeighbors;
  }

  nextState() {
    return this.state.map((row, rowNum) =>
      row.map(
        (cell, colNum) =>
          new Cell(
            cell.getNextState(this.getNumberOfAliveNeighbors(rowNum, colNum))
          )
      )
    );
  }
}
