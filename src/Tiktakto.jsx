import React, { useState, useEffect } from 'react';
import "./tiktakto.css"
import Modal from './Modal';


const Tiktakto = () => {

    // State to manage the game
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
    const [gameEnded, setGameEnded] = useState(false);
    const [playerXWins, setPlayerXWins] = useState(0);
    const [playerOWins, setPlayerOWins] = useState(0);
    const [modalImage, setModalImage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        // Initialize the game: set the board, player X starts, and game is not ended
        setGameBoard(Array(9).fill(''));
        setCurrentPlayer('X');
        setGameEnded(false);
    }, []);


    // Function to check if there is a winner
    const checkWinner = (board) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return board.includes('') ? null : 'T'; // Tie if no winner and no empty cells
    }

    const handleCellClick = (index) => {
        if (gameBoard[index] || gameEnded) return;

        const newGameBoard = [...gameBoard];
        newGameBoard[index] = currentPlayer;

        const winner = checkWinner(newGameBoard);

        if (winner) {
            if (winner === 'T') {
                setModalMessage("מיטמוט יאפס");
                setModalImage('WhatsApp Image 2023-08-04 at 21.32.55.jpg');
            } else {
                setModalMessage(`מיטמוט יאפס`);
                
                if (winner === 'X') {
                    setPlayerXWins(playerXWins + 1);
                    setModalImage('WhatsApp Image 2023-08-04 at 21.32.55.jpg');
                } else {
                    setPlayerOWins(playerOWins + 1);
                    setModalImage('WhatsApp Image 2023-08-04 at 21.32.55.jpg');
                }
            }

            setShowModal(true);

            // Update game board and switch the current player immediately
            setGameBoard(newGameBoard);
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

            setGameEnded(true);
            return; // Return early to prevent further updates
        }

        setGameBoard(newGameBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        resetGame();
    };


    const resetGame = () => {
        setGameBoard(Array(9).fill(''));
        setGameEnded(false);
        setCurrentPlayer('X');
    };

    return (
        <div className="container">
            <div className="player-wins-container">
                <p style={{ marginRight: '90px' }}>Player X wins: {playerXWins}</p>
                <p >Player O wins: {playerOWins}</p>
            </div>

            <div className="board">
                {gameBoard.map((cell, index) => (
                    <div
                        key={index} 
                        className={`cell ${cell === 'X' ? 'cell-x' : cell === 'O' ? 'cell-o' : ''}`}
                        onClick = {() => handleCellClick(index)}>
                        {cell === 'X' ? 'X' : cell === 'O' ? 'O' : ''} {/* Render X or O inside the cell, or non-breaking space if empty */}
                    </div>
                ))}
            </div>

            <br />

            {gameEnded && (
                <button type="button" className="btn btn-success" onClick={resetGame}>
                    Reset Game
                </button>
            )}

            {showModal && <Modal message={modalMessage} image={modalImage} onClose={handleCloseModal} />}
        </div>
    );
};
export default Tiktakto;
