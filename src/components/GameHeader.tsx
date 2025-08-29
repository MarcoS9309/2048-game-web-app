import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface GameHeaderProps {
  score: number;
  bestScore: number;
  onRestart: () => void;
}

export function GameHeader({ score, bestScore, onRestart }: GameHeaderProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">2048</h1>
          <Button 
            onClick={onRestart}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <RotateCcw size={16} />
            Reiniciar
          </Button>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">
          ¡Une las fichas para llegar a <strong>2048!</strong>
        </p>
        
        <div className="flex gap-2">
          <div className="flex-1 text-center">
            <div className="bg-primary text-primary-foreground px-3 py-2 rounded-md">
              <div className="text-xs font-medium uppercase tracking-wide">Puntuación</div>
              <div className="text-lg font-bold">{score.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="flex-1 text-center">
            <div className="bg-secondary text-secondary-foreground px-3 py-2 rounded-md">
              <div className="text-xs font-medium uppercase tracking-wide">Mejor</div>
              <div className="text-lg font-bold">{bestScore.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">2048</h1>
        <p className="text-muted-foreground text-sm">
          ¡Une las fichas para llegar a <strong>2048!</strong>
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
            <div className="text-xs font-medium uppercase tracking-wide">Puntuación</div>
            <div className="text-lg font-bold">{score.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md">
            <div className="text-xs font-medium uppercase tracking-wide">Mejor</div>
            <div className="text-lg font-bold">{bestScore.toLocaleString()}</div>
          </div>
        </div>
        
        <Button 
          onClick={onRestart}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <RotateCcw size={16} />
          Reiniciar
        </Button>
      </div>
    </div>
  );
}