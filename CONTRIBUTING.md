# Contributing to 2048 Game Web App

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to the 2048 Game Web App. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When you are creating an enhancement suggestion, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most users.

### Pull Requests

The process described here has several goals:

- Maintain code quality
- Fix problems that are important to users
- Engage the community in working toward the best possible game experience
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. **Fork the repository** and create your branch from `main`.
2. **Make your changes** following our coding standards.
3. **Add tests** if applicable.
4. **Ensure the test suite passes** (`npm run lint`).
5. **Make sure your code builds** (`npm run build`).
6. **Update documentation** if needed.
7. **Submit a pull request**.

## Development Setup

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/2048-game-web-app.git
   cd 2048-game-web-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## Coding Standards

### TypeScript
- Use TypeScript for all new code
- Prefer interfaces over types when possible
- Use proper typing, avoid `any`

### React
- Use functional components with hooks
- Follow React best practices
- Use proper key props for lists

### Styling
- Use Tailwind CSS classes
- Follow the existing design system
- Maintain responsive design

### Code Style
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing code formatting
- Run `npm run lint` before committing

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── GameGrid.tsx   # Main game grid
│   ├── GameHeader.tsx # Score and controls
│   └── ...
├── hooks/             # Custom React hooks
├── lib/               # Core game logic and utilities
└── styles/            # CSS and styling
```

## Testing

- Ensure all existing functionality works after your changes
- Test on different screen sizes (mobile, tablet, desktop)
- Test keyboard and touch interactions
- Verify game logic works correctly

## Commit Messages

Use clear and meaningful commit messages:

- `feat: add new feature`
- `fix: resolve bug in game logic`
- `docs: update README`
- `style: improve mobile layout`
- `refactor: optimize game state management`

## Questions?

Feel free to open an issue with the `question` label if you have any questions about contributing!

## Recognition

Contributors will be recognized in the project's README and release notes.

Thank you for contributing! 🚀
