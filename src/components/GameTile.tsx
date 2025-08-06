import { Tile } from '@/lib/game2048';

interface GameTileProps {
  tile: Tile | null;
}

export function GameTile({ tile }: GameTileProps) {
  if (!tile) {
    return (
      <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
      </div>
    );
  }

  const getTileClass = (value: number) => {
    return `game-tile-${value}`;
  };

  return (
    <div 
      className={`
        w-16 h-16 rounded-md flex items-center justify-center
        font-bold text-lg game-tile
        ${getTileClass(tile.value)}
        ${tile.isNew ? 'tile-appear' : ''}
        ${tile.isMerged ? 'tile-merge' : ''}
      `}
    >
      {tile.value}
    </div>
  );
}