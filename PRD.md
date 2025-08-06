# 2048 Game - Product Requirements Document

A simplified, modular implementation of the classic 2048 puzzle game with clean mechanics and intuitive controls.

**Experience Qualities**: 
1. **Engaging** - Immediate feedback and satisfying tile combinations create an addictive puzzle experience
2. **Intuitive** - Arrow key controls feel natural and responsive for seamless gameplay
3. **Clean** - Minimalist visual design focuses attention on the game mechanics without distractions

**Complexity Level**: Light Application (multiple features with basic state)
- Single-purpose game with multiple interactive states (playing, won, game over)
- Manages game grid state, score tracking, and win/lose conditions
- Simple but complete feature set focused on core 2048 mechanics

## Essential Features

**Grid Management**
- Functionality: 4x4 grid that displays numbered tiles with smooth animations
- Purpose: Provides the core game board for tile movement and combination mechanics
- Trigger: Game initialization and after each valid move
- Progression: Initialize empty grid → Place initial tiles → Update after moves → Handle animations
- Success criteria: Grid displays correctly, tiles animate smoothly, positions update accurately

**Tile Movement & Combination**
- Functionality: Arrow keys move all tiles in chosen direction, combining matching adjacent tiles
- Purpose: Core game mechanic that drives puzzle solving and progression
- Trigger: Arrow key press (up, down, left, right)
- Progression: Key press → Calculate new positions → Combine matching tiles → Add scores → Animate movement → Generate new tile
- Success criteria: Tiles move correctly, combinations work properly, scores update, new tiles appear

**Score Tracking**
- Functionality: Tracks current score and displays it prominently
- Purpose: Provides progression feedback and achievement motivation
- Trigger: Tile combinations during gameplay
- Progression: Tiles combine → Add combined value to score → Update display → Save high score
- Success criteria: Score updates accurately, displays clearly, persists between sessions

**Win/Lose Detection**
- Functionality: Detects when player reaches 2048 (win) or has no valid moves (lose)
- Purpose: Provides clear game completion states and restart opportunities
- Trigger: After each move validation
- Progression: Check for 2048 tile → Show win state → Check for valid moves → Show game over → Offer restart
- Success criteria: Win detected at 2048, lose detected when no moves possible, clear messaging

**Game Reset**
- Functionality: Restart button that clears grid and resets score
- Purpose: Allows players to start fresh without page reload
- Trigger: Click restart button or after game over
- Progression: Button press → Clear grid → Reset score → Place initial tiles → Enable controls
- Success criteria: Game fully resets to initial state, ready for new game

## Edge Case Handling

- **Invalid moves**: Prevent moves that don't change grid state (no movement or combinations possible)
- **Rapid key presses**: Debounce input during animations to prevent state corruption
- **Browser focus**: Pause game when window loses focus to prevent accidental moves
- **Mobile devices**: Provide touch/swipe gesture support as alternative to keyboard
- **Local storage**: Handle cases where localStorage is unavailable gracefully

## Design Direction

The design should feel modern and minimalist with satisfying tactile feedback - clean geometric shapes with subtle depth and smooth animations that emphasize the mathematical precision of the puzzle while remaining playful and engaging.

## Color Selection

Triadic color scheme with warm, muted tones that create visual hierarchy without overwhelming the numeric content.

- **Primary Color**: Warm terracotta `oklch(0.65 0.15 35)` - Main background and primary UI elements, communicates stability and focus
- **Secondary Colors**: 
  - Sage green `oklch(0.7 0.1 155)` for tile backgrounds and secondary elements
  - Dusty blue `oklch(0.6 0.12 275)` for accents and highlights
- **Accent Color**: Bright coral `oklch(0.7 0.18 35)` for high-value tiles, CTAs, and victory states
- **Foreground/Background Pairings**:
  - Background (Warm cream `oklch(0.95 0.02 35)`): Dark brown text `oklch(0.25 0.05 35)` - Ratio 6.2:1 ✓
  - Primary (Terracotta): White text `oklch(0.98 0 0)` - Ratio 4.8:1 ✓
  - Accent (Bright coral): White text `oklch(0.98 0 0)` - Ratio 4.9:1 ✓
  - Tiles: Dark brown `oklch(0.25 0.05 35)` on light backgrounds - Ratio 6.2:1 ✓

## Font Selection

Clean, geometric sans-serif typography that emphasizes readability of numbers while maintaining a modern, game-like personality.

- **Typographic Hierarchy**:
  - H1 (Game Title): Inter Bold/32px/tight letter spacing
  - H2 (Score Labels): Inter Medium/18px/normal spacing  
  - Tile Numbers: Inter Bold/24px/tight spacing for clarity
  - UI Text: Inter Regular/16px/normal spacing
  - Small Text: Inter Regular/14px/normal spacing

## Animations

Smooth, purposeful animations that provide clear feedback for game state changes while maintaining responsive feel - emphasizing the satisfaction of tile combinations without delaying gameplay.

- **Purposeful Meaning**: Tile slide animations communicate direction and momentum, scale effects on combination emphasize success, gentle bounce on new tiles creates anticipation
- **Hierarchy of Movement**: Tile movements are primary focus, UI updates are secondary, background elements remain stable for reference

## Component Selection

- **Components**: 
  - Card component for game board with subtle shadow and rounded corners
  - Button components for restart/new game actions with clear hover states
  - Custom grid component using CSS Grid for precise tile positioning
  - Toast/Alert components for win/lose notifications using sonner
- **Customizations**: 
  - Custom tile components with number-based styling and animation states
  - Game grid component with smooth CSS transitions
  - Score display component with animated number counting
- **States**: 
  - Tiles: empty, numbered (with value-based colors), animating, combining
  - Game: playing, won, lost, transitioning
  - Buttons: default, hover, active, disabled
- **Icon Selection**: 
  - Refresh icon for restart functionality
  - Arrow icons for mobile swipe hints
  - Trophy icon for victory state
- **Spacing**: Consistent 16px base spacing with 8px for tight areas, 24px for section separation
- **Mobile**: 
  - Touch gesture support for tile movement
  - Larger touch targets for buttons (minimum 44px)
  - Responsive grid sizing for smaller screens
  - Stacked layout for score and controls on mobile