import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useIsMobile } from '@/hooks/use-mobile';

export function GameInstructions() {
  const isMobile = useIsMobile();

  return (
    <Card className="mt-6">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-3">How to Play</h3>
        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            {isMobile ? (
              <>Use <strong>swipe gestures</strong> to move the tiles:</>
            ) : (
              <>Use your <strong>arrow keys</strong> to move the tiles:</>
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
            <li>• When two tiles with the same number touch, they merge into one!</li>
            <li>• Try to create a tile with the number <strong>2048</strong> to win</li>
            <li>• Keep playing for a higher score after winning</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}