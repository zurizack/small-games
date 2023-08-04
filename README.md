# Tic-Tac-Toe Game

This is a simple implementation of the classic Tic-Tac-Toe game using React. The game board is displayed as a 3x3 grid, and players take turns to place their symbol (X or O) in an empty cell. The game checks for a winner after each move and displays an alert if a player wins or if the game ends in a tie.

## Implementation Details

The game implementation is spread across multiple files:

- `App.js`: This is the main component that wraps the entire game and includes the `Tiktakto` component.

- `index.js`: This is the entry point of the application where the `App` component is rendered into the DOM.

- `index.css`: This file contains styling for the main `App` component.

- `tiktakto.css`: This file contains styling specific to the `Tiktakto` component.

- `Tiktakto.jsx`: This is the component that represents the Tic-Tac-Toe board and handles the game logic.

## Tiktakto.jsx
Because the Tiktakto.jsx is the core of the game I will detail it and the methods a little more

This component represents the Tic-Tac-Toe board and handles the game logic. It is responsible for rendering the game board, handling player moves, and checking for a winner or a tie.


### State

The component uses React `useState` hook to manage the following states:

- `currentPlayer`: Represents the current player's symbol ('X' or 'O').
- `gameBoard`: An array that represents the state of the game board. Each element in the array corresponds to a cell on the board and contains either 'X', 'O', or an empty string ('') indicating an unoccupied cell.
- `gameEnded`: A boolean value that becomes true when the game ends, either by a winner or a tie.
- `playerXWins`: Represents the number of wins for Player X.
- `playerOWins`: Represents the number of wins for Player O.

### Function: `checkWinner(board)`

This function is used to check if there is a winner on the current game board. It takes the `board` as an argument, which is the `gameBoard` state. The function checks all possible winning patterns (rows, columns, and diagonals) and returns the winning player's symbol ('X' or 'O') if a winning pattern is found. If there is no winner and the board is full (no empty cells), the function returns 'T', indicating a tie.

### Function: `handleCellClick(index)`

This function is called when a player clicks on a cell in the game board. It takes the `index` of the clicked cell as an argument. When a cell is clicked, the function checks if the cell is empty and if the game is not yet ended. If both conditions are true, the function creates a new copy of the `gameBoard` array and updates the clicked cell with the current player's symbol.

After updating the `gameBoard`, the function calls `checkWinner` to see if there is a winner. If there is a winner or a tie, an alert is shown with the result. If there is no winner, the function switches the current player and updates the state with the new `gameBoard`.

### Function: `resetGame()`

This function is called when the "Reset Game" button is clicked after the game ends. It resets the `gameBoard`, sets `gameEnded` to false, and sets the current player to 'X', starting a new game.

### Render

In the render section of the component, the game board is rendered as a 3x3 grid using the `map` function on the `gameBoard` state. Each cell in the grid is represented by a `<div>` element with a `className` that indicates the current player's symbol ('X' or 'O') or an empty cell.

The "Player X wins" and "Player O wins" paragraphs display the number of wins for each player. The "Reset Game" button appears when the game ends and is used to start a new game.

## Running the Game Locally

To run the game locally on your machine, follow these steps:

1. Clone the repository:

 - git clone https://github.com/zurizack/small-games.git
 - cd small-games

2. Checkout the `main` branch:

 - git checkout main


3. Install the dependencies:

 - npm install


4. Start the development server:

 - npm start


The game should now be accessible at `http://localhost:3000/` in your web browser.

## Live Demo

You can also try out the game online by visiting the following link:

[https://zurizack.github.io/small-games/](https://zurizack.github.io/small-games/)

## Deploying to GitHub Pages

The `gh-pages` branch is used specifically for deploying the React app to GitHub Pages. To deploy the app, you can use the following command:

 - npm run deploy -- -m "Deploy React app to GitHub Pages"


This command will build the app and push it to the `gh-pages` branch, making it accessible at the GitHub Pages URL.

Please note that the `gh-pages` branch should only be used for deployment purposes and should not be modified directly.

Enjoy playing Tic-Tac-Toe!
