import kingLight from './assets/img/king-light.svg'
import queenDark from './assets/img/queen-dark.svg'
import bishopLight from './assets/img/bishop-light.svg'
import knightDark from './assets/img/knight-dark.svg'
import castleLight from './assets/img/castle-light.svg'
import pawnDark from './assets/img/pawn-dark.svg'

export const chessItems = [{
    image: kingLight,
    name: 'king',
    text: 'In chess, the king is the most important piece. The object of the game is to trap the opponent`s king so that its escape is not possible (checkmate). If a player`s king is threatened with capture. It id said to be in check, and the player must remove the threat of capture on the next move.',
    W: '2.5cm',
    H: '6.4cm',
    D: '2.5cm' 
},
{
    image: queenDark,
    name: 'queen',
    text: 'In chess, he queen is the most powerful piece on the board. It can move any number of squares vertically, horizontally, or diagonally. Its versatility makes it a key player in both offensive and defensive strategies.',
    W: '2.5cm',
    H: '6.2cm',
    D: '2.5cm' 
},
{
    image: bishopLight,
    name: 'bishop',
    text: 'The bishop moves diagonally across the board, and each player has two bishops, one on a light square and one on a dark square. Bishops are effective for controlling long diagonals and coordinating with other pieces.',
    W: '2.5cm',
    H: '5.5cm',
    D: '2.5cm' 
},
{
    image: knightDark,
    name: 'knight',
    text: 'The knight moves in an L-shape: two squares in one direction (horizontally or vertically) and then one square perpendicular to that direction. Its unique movement allows it to leap over other pieces, making it valuable for maneuvering around the board and forking opponent pieces.',
    W: '2.5cm',
    H: '5cm',
    D: '2.5cm' 
}, 
{
    image: castleLight,
    name: 'castle',
    text: 'The castle can move any number of squares vertically or horizontally. Its straightforward movement pattern makes it a valuable piece for controlling files and ranks, especially in the endgame.',
    W: '2.5cm',
    H: '4.5cm',
    D: '2.5cm' 
},
{
    image: pawnDark,
    name: 'pawn',
    text: "Pawns move forward one square at a time, but they have a unique initial move option of advancing two squares. Pawns capture diagonally and can promote to any other piece (except a king) upon reaching the opponent's back rank. Pawns play a critical role in controlling the center and creating pawn structures.",
    W: '2.5cm',
    H: '3.5cm',
    D: '2.5cm' 
}]