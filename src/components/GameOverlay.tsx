import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface GameOverlayProps {
  type: 'win' | 'gameOver';
  onRestart: () => void;
  onContinue?: () => void;
}

export function GameOverlay({ type, onRestart, onContinue }: GameOverlayProps) {
  return (
    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10">
      <Card className="w-80">
        <CardContent className="p-6 text-center">
          {type === 'win' ? (
            <>
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-accent mb-2">¡Ganaste!</h2>
              <p className="text-muted-foreground mb-6">
                ¡Felicitaciones! ¡Alcanzaste 2048!
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={onRestart} variant="outline">
                  Intentar de Nuevo
                </Button>
                {onContinue && (
                  <Button onClick={onContinue} className="bg-accent hover:bg-accent/90">
                    Seguir Jugando
                  </Button>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="text-4xl mb-4">😞</div>
              <h2 className="text-2xl font-bold text-destructive mb-2">Fin del Juego</h2>
              <p className="text-muted-foreground mb-6">
                ¡No hay más movimientos disponibles!
              </p>
              <Button onClick={onRestart} className="bg-primary hover:bg-primary/90">
                Intentar de Nuevo
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}