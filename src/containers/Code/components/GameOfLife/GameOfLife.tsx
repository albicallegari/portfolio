import React, { Children, useState } from "react";
import TDDGol from "tdd-game-of-life";
import "./GameOfLife.scss";
import { useMediaQuery } from "@mui/material";
import { getTranslatedLabel } from "../../../../common/labels/utils";

const { Game, CellState, Cell } = TDDGol;
const { ALIVE, DEAD } = CellState;

const game = new Game([
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, ALIVE, ALIVE, ALIVE, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD, DEAD],
]);

const GameOfLife = () => {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const [cellsState, setCellsState] = useState(game.state);
  const getBgCellColor = (state: Partial<typeof CellState>) => {
    if (isDarkModeEnabled) {
      if (state === ALIVE) return "#fff";
      return "#000";
    } else {
      if (state === ALIVE) return "#000";
      return "#fff";
    }
  };

  const getNextState = () => {
    const nextState = game.nextState();
    game.state = nextState;
    setCellsState(nextState);
  };

  const toggleCellState = (row: number, col: number) => {
    setCellsState(() => {
      const cells = cellsState.map((cellRow: any, rowNum: number) => (
        cellRow.map((cell: any, colNum: number) => {
          if (rowNum === row && colNum === col) {
            return new Cell(cell.state === ALIVE ? DEAD : ALIVE);
          }
          return cell;
        })
      ));
      game.state = cells;
      return cells;
      
    })
  };

  return (
    <div className="min-h-[80vh] h-full flex flex-col gap-5 items-center mt-6">
      <p className="gol_title">{getTranslatedLabel('aboutCode.gameOfLife')}</p>
      <table>
        <tbody>
          {Children.toArray(
            cellsState.map((row: any, rowNum: number) => (
              <tr>
                {Children.toArray(
                  row.map((cell: any, colNum: number) => (
                    <td
                      className="gol_cell"
                      style={{ background: getBgCellColor(cell.state) }}
                      onClick={() => toggleCellState(rowNum, colNum)}
                    />
                  ))
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <button onClick={getNextState}>Next</button>
    </div>
  );
};

export default GameOfLife;
