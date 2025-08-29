import { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useTouchGestures } from '@/hooks/useTouchGestures';
import { Game2048, Direction } from '@/lib/game2048';
import { GameHeader } from '@/components/GameHeader';
import { GameGrid } from '@/components/GameGrid';
import { GameOverlay } from '@/components/GameOverlay';
import { GameInstructions } from '@/components/GameInstructions';
import { toast } from 'sonner';

function App() {
  const [game, setGame] = useState(() => new Game2048());
  const [gameState, setGameState] = useState(game.getState());
  const [bestScore, setBestScore] = useLocalStorage('game-2048-best-score', 0);

  const updateGameState = useCallback(() => {
    const newState = game.getState();
    setGameState(newState);
    
    // Update best score
    if (newState.score > bestScore) {
      setBestScore(newState.score);
    }
  }, [game, bestScore, setBestScore]);

  const handleMove = useCallback((direction: Direction) => {
    // Use current game state instead of potentially stale gameState
    const currentState = game.getState();
    if (currentState.isGameOver || currentState.isWon) return;
    
    const moved = game.move(direction);
    if (moved) {
      updateGameState();
    }
  }, [game, updateGameState]);

  const handleRestart = useCallback(() => {
    const newGame = new Game2048();
    setGame(newGame);
    setGameState(newGame.getState());
    toast.success('¡Nuevo juego iniciado!');
  }, []);

  const handleContinue = useCallback(() => {
    game.continueAfterWin();
    updateGameState();
    toast.success('¡Sigue jugando para superar tu mejor puntuación!');
  }, [game, updateGameState]);

  // Touch gesture support
  useTouchGestures({ onMove: handleMove });

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only handle arrow keys and prevent their default behavior
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          handleMove('up');
          break;
        case 'ArrowDown':
          event.preventDefault();
          handleMove('down');
          break;
        case 'ArrowLeft':
          event.preventDefault();
          handleMove('left');
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleMove('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleMove]);

  useEffect(() => {
    if (gameState.isWon && !game.getState().isGameOver) {
      toast.success('🎉 ¡Felicitaciones! ¡Alcanzaste 2048!');
    } else if (gameState.isGameOver) {
      toast.error('😞 ¡Fin del juego! No hay más movimientos disponibles.');
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
        
        <div className="relative" role="main" aria-label="Área de juego 2048">
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
        
        {/* Screen reader instructions */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Puntuación actual: {gameState.score}. 
          {gameState.isWon && "¡Has ganado alcanzando 2048!"} 
          {gameState.isGameOver && "Juego terminado. No hay más movimientos disponibles."}
        </div>
      </div>
    </div>
  );
}

export default App;