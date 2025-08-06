export type Direction = 'up' | 'down' | 'left' | 'right';
export type Tile = {
  id: string;
  value: number;
  position: { row: number; col: number };
  isNew?: boolean;
  isMerged?: boolean;
};

export type GameState = {
  grid: (Tile | null)[][];
  score: number;
  isWon: boolean;
  isGameOver: boolean;
};

export class Game2048 {
  private grid: (Tile | null)[][];
  private score: number;
  private isWon: boolean;
  private isGameOver: boolean;
  private tileIdCounter: number;

  constructor() {
    this.grid = this.createEmptyGrid();
    this.score = 0;
    this.isWon = false;
    this.isGameOver = false;
    this.tileIdCounter = 0;
    this.initializeGame();
  }

  private createEmptyGrid(): (Tile | null)[][] {
    return Array(4).fill(null).map(() => Array(4).fill(null));
  }

  private generateTileId(): string {
    return `tile-${this.tileIdCounter++}`;
  }

  private initializeGame(): void {
    this.addRandomTile();
    this.addRandomTile();
  }

  private addRandomTile(): void {
    const emptyCells = [];
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (!this.grid[row][col]) {
          emptyCells.push({ row, col });
        }
      }
    }

    if (emptyCells.length > 0) {
      const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const value = Math.random() < 0.9 ? 2 : 4;
      this.grid[randomCell.row][randomCell.col] = {
        id: this.generateTileId(),
        value,
        position: randomCell,
        isNew: true
      };
    }
  }

  private moveTilesInDirection(direction: Direction): boolean {
    const oldGrid = this.grid.map(row => [...row]);
    let moved = false;
    let scoreAdded = 0;

    // Clear merge flags
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (this.grid[row][col]) {
          this.grid[row][col]!.isMerged = false;
          this.grid[row][col]!.isNew = false;
        }
      }
    }

    const moveAndMergeLine = (line: (Tile | null)[]): (Tile | null)[] => {
      // Remove nulls and move tiles
      const filteredLine = line.filter(tile => tile !== null);
      const newLine: (Tile | null)[] = [];

      for (let i = 0; i < filteredLine.length; i++) {
        const currentTile = filteredLine[i]!;
        const nextTile = filteredLine[i + 1];

        if (nextTile && currentTile.value === nextTile.value && !currentTile.isMerged && !nextTile.isMerged) {
          // Merge tiles
          const mergedTile: Tile = {
            id: currentTile.id,
            value: currentTile.value * 2,
            position: currentTile.position,
            isMerged: true
          };
          newLine.push(mergedTile);
          scoreAdded += mergedTile.value;
          
          if (mergedTile.value === 2048 && !this.isWon) {
            this.isWon = true;
          }
          
          i++; // Skip next tile as it's merged
        } else {
          newLine.push(currentTile);
        }
      }

      // Fill the rest with nulls
      while (newLine.length < 4) {
        newLine.push(null);
      }

      return newLine;
    };

    if (direction === 'left') {
      for (let row = 0; row < 4; row++) {
        const newRow = moveAndMergeLine(this.grid[row]);
        this.grid[row] = newRow;
        
        // Update positions
        for (let col = 0; col < 4; col++) {
          if (this.grid[row][col]) {
            this.grid[row][col]!.position = { row, col };
          }
        }
      }
    } else if (direction === 'right') {
      for (let row = 0; row < 4; row++) {
        const reversedRow = [...this.grid[row]].reverse();
        const newRow = moveAndMergeLine(reversedRow).reverse();
        this.grid[row] = newRow;
        
        // Update positions
        for (let col = 0; col < 4; col++) {
          if (this.grid[row][col]) {
            this.grid[row][col]!.position = { row, col };
          }
        }
      }
    } else if (direction === 'up') {
      for (let col = 0; col < 4; col++) {
        const column = [];
        for (let row = 0; row < 4; row++) {
          column.push(this.grid[row][col]);
        }
        const newColumn = moveAndMergeLine(column);
        for (let row = 0; row < 4; row++) {
          this.grid[row][col] = newColumn[row];
          if (this.grid[row][col]) {
            this.grid[row][col]!.position = { row, col };
          }
        }
      }
    } else if (direction === 'down') {
      for (let col = 0; col < 4; col++) {
        const column = [];
        for (let row = 3; row >= 0; row--) {
          column.push(this.grid[row][col]);
        }
        const newColumn = moveAndMergeLine(column);
        for (let row = 0; row < 4; row++) {
          this.grid[3 - row][col] = newColumn[row];
          if (this.grid[3 - row][col]) {
            this.grid[3 - row][col]!.position = { row: 3 - row, col };
          }
        }
      }
    }

    // Check if anything moved
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const oldTile = oldGrid[row][col];
        const newTile = this.grid[row][col];
        
        if ((oldTile === null) !== (newTile === null) ||
            (oldTile && newTile && oldTile.value !== newTile.value)) {
          moved = true;
          break;
        }
      }
      if (moved) break;
    }

    if (moved) {
      this.score += scoreAdded;
      this.addRandomTile();
      this.checkGameOver();
    }

    return moved;
  }

  private checkGameOver(): void {
    // Check if there are empty cells
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        if (!this.grid[row][col]) {
          return; // Game is not over
        }
      }
    }

    // Check if there are possible merges
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        const currentTile = this.grid[row][col];
        if (currentTile) {
          // Check right neighbor
          if (col < 3 && this.grid[row][col + 1]?.value === currentTile.value) {
            return; // Merge possible
          }
          // Check bottom neighbor
          if (row < 3 && this.grid[row + 1][col]?.value === currentTile.value) {
            return; // Merge possible
          }
        }
      }
    }

    this.isGameOver = true;
  }

  public move(direction: Direction): boolean {
    if (this.isGameOver) return false;
    return this.moveTilesInDirection(direction);
  }

  public restart(): void {
    this.grid = this.createEmptyGrid();
    this.score = 0;
    this.isWon = false;
    this.isGameOver = false;
    this.tileIdCounter = 0;
    this.initializeGame();
  }

  public getState(): GameState {
    return {
      grid: this.grid.map(row => [...row]),
      score: this.score,
      isWon: this.isWon,
      isGameOver: this.isGameOver
    };
  }

  public continueAfterWin(): void {
    this.isWon = false;
  }
}