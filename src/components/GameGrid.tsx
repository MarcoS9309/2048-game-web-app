import { GameState } from '@/lib/game2048';
import { GameTile } from './GameTile';

interface GameGridProps {
  gameState: GameState;
}

export function GameGrid({ gameState }: GameGridProps) {
  return (
    <div 
      className="bg-card p-2 sm:p-4 rounded-lg shadow-lg game-area" 
      data-game-grid
      role="grid"
      aria-label="Tablero de juego 2048"
    >
      <div className="grid grid-cols-4 gap-1 sm:gap-2">
        {gameState.grid.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <div
              key={`cell-${rowIndex}-${colIndex}`}
              role="gridcell"
              aria-label={
                tile 
                  ? `Celda fila ${rowIndex + 1}, columna ${colIndex + 1}: ${tile.value}`
                  : `Celda vacía fila ${rowIndex + 1}, columna ${colIndex + 1}`
              }
            >
              <GameTile
                tile={tile}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}