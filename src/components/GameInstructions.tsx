import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export function GameInstructions() {
  const isMobile = useIsMobile();

  return (
    <Card className="mt-6">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">Cómo Jugar</h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            {isMobile ? (
              <>Usa <strong>gestos de deslizar</strong> para mover las fichas:</>
            ) : (
              <>Usa las <strong>teclas de flecha</strong> para mover las fichas:</>
            )}
          </p>
          <div className="flex items-center justify-center gap-2 my-3">
            <div className="flex items-center gap-1 text-xs">
              <ArrowUp size={16} className="text-primary" />
              <ArrowDown size={16} className="text-primary" />
              <ArrowLeft size={16} className="text-primary" />
              <ArrowRight size={16} className="text-primary" />
            </div>
          </div>
          <ul className="space-y-1 ml-4">
            <li>• Cuando dos fichas con el mismo número se tocan, ¡se combinan en una!</li>
            <li>• Trata de crear una ficha con el número <strong>2048</strong> para ganar</li>
            <li>• Sigue jugando para obtener una puntuación más alta después de ganar</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}