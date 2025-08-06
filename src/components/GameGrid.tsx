import { GameState } from '@/lib/game2048';
import { GameTile } from './GameTile';

interface GameGridProps {
  gameState: GameState;
}

export function GameGrid({ gameState }: GameGridProps) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-2">
        {gameState.grid.map((row, rowIndex) =>
          row.map((tile, colIndex) => (
            <GameTile
              key={tile?.id || `${rowIndex}-${colIndex}`}
              tile={tile}
            />
          ))
        )}
      </div>
    </div>
  );
}