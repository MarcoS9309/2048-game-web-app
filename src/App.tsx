import { useState, useEffect, useCallback } from 'react';
import { useKV } from '@github/spark/hooks';
import { useTouchGestures } from '@/hooks/useTouchGestures';
import { Game2048, Direction } from '@/lib/game2048';
import { GameHeader } from '@/components/GameHeader';
import { GameGrid } from '@/components/GameGrid';
import { GameOverlay } from '@/components/GameOverlay';
import { GameInstructions } from '@/components/GameInstructions';
import { toast } from 'sonner';

function App() {
  const [game] = useState(() => new Game2048());
  const [gameState, setGameState] = useState(game.getState());
  const [bestScore, setBestScore] = useKV('game-2048-best-score', 0);

  const updateGameState = useCallback(() => {
    const newState = game.getState();
    setGameState(newState);
    
    // Update best score
    if (newState.score > bestScore) {
      setBestScore(newState.score);
    }
  }, [game, bestScore, setBestScore]);

  const handleMove = useCallback((direction: Direction) => {
    if (gameState.isGameOver || gameState.isWon) return;
    
    const moved = game.move(direction);
    if (moved) {
      updateGameState();
    }
  }, [game, gameState.isGameOver, gameState.isWon, updateGameState]);

  const handleRestart = useCallback(() => {
    game.restart();
    updateGameState();
    toast.success('New game started!');
  }, [game, updateGameState]);

  const handleContinue = useCallback(() => {
    game.continueAfterWin();
    updateGameState();
    toast.success('Keep playing to beat your high score!');
  }, [game, updateGameState]);

  // Touch gesture support
  useTouchGestures({ onMove: handleMove });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault();
      
      switch (event.key) {
        case 'ArrowUp':
          handleMove('up');
          break;
        case 'ArrowDown':
          handleMove('down');
          break;
        case 'ArrowLeft':
          handleMove('left');
          break;
        case 'ArrowRight':
          handleMove('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleMove]);

  useEffect(() => {
    if (gameState.isWon && !game.getState().isGameOver) {
      toast.success('🎉 Congratulations! You reached 2048!');
    } else if (gameState.isGameOver) {
      toast.error('😞 Game Over! No more moves available.');
    }
  }, [gameState.isWon, gameState.isGameOver, game]);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto">
        <GameHeader 
          score={gameState.score}
          bestScore={bestScore}
          onRestart={handleRestart}
        />
        
        <div className="relative">
          <GameGrid gameState={gameState} />
          
          {gameState.isWon && !gameState.isGameOver && (
            <GameOverlay 
              type="win" 
              onRestart={handleRestart}
              onContinue={handleContinue}
            />
          )}
          
          {gameState.isGameOver && (
            <GameOverlay 
              type="gameOver" 
              onRestart={handleRestart}
            />
          )}
        </div>
        
        <GameInstructions />
      </div>
    </div>
  );
}

export default App;