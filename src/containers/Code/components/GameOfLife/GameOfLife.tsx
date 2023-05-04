import React, { useState } from "react";
import TDDGol from "tdd-game-of-life";

const { Game, CellState } = TDDGol;
const { ALIVE, DEAD } = CellState;

const game = new Game([
  [DEAD, DEAD, DEAD, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, ALIVE, DEAD, DEAD],
  [DEAD, DEAD, DEAD, DEAD, DEAD],
]);

const GameOfLife = () => {
  const [cells, setCells] = useState(game.state);
  return (
    <div>
      <h1>Game Of Life</h1>
      {cells.map((row: any) => (
        <tr>
          {row.map((cell: any) => (
            <td>x</td>
          ))}
        </tr>
      ))}
    </div>
  );
};

export default GameOfLife;
