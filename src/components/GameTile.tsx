import { Tile } from '@/lib/game2048';

interface GameTileProps {
  tile: Tile | null;
}

export function GameTile({ tile }: GameTileProps) {
  if (!tile) {
    return (
      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-muted rounded-md flex items-center justify-center">
      </div>
    );
  }

  const getTileClass = (value: number) => {
    return `game-tile-${value}`;
  };

  return (
    <div 
      className={`
        w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-md flex items-center justify-center
        font-bold text-sm sm:text-lg md:text-xl game-tile
        ${getTileClass(tile.value)}
        ${tile.isNew ? 'tile-appear' : ''}
        ${tile.isMerged ? 'tile-merge' : ''}
      `}
      aria-hidden="true"
    >
      {tile.value}
    </div>
  );
}