import './style.css';

const btnBurger = document.querySelector('.burger-menu');
const header = document.querySelector('.header-container');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('active');
  header.classList.toggle('active');
});

const nonograms = [
  {
    id: 1,
    name: 'dog',
    difficulty: 'easy',
    cellsNumber: 25,
    matrix: [
      [0, 0, 0, 1, 0],
      [1, 0, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0],
    ],
  },

  {
    id: 2,
    name: 'plane',
    difficulty: 'easy',
    cellsNumber: 25,
    matrix: [
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 1, 1, 0],
    ],
  },

  {
    id: 3,
    name: 'tower',
    difficulty: 'easy',
    cellsNumber: 25,
    matrix: [
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 1, 0],
    ],
  },

  {
    id: 4,
    name: 'smile',
    difficulty: 'easy',
    cellsNumber: 25,
    matrix: [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
  },

  {
    id: 5,
    name: 'scull',
    difficulty: 'easy',
    cellsNumber: 25,
    matrix: [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0],
    ],
  },

  {
    id: 6,
    name: 'tv',
    difficulty: 'medium',
    cellsNumber: 100,
    matrix: [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    ],
  },

  {
    id: 7,
    name: 'question',
    difficulty: 'medium',
    cellsNumber: 100,
    matrix: [
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ],
  },

  {
    id: 8,
    name: 'tea',
    difficulty: 'medium',
    cellsNumber: 100,
    matrix: [
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ],
  },

  {
    id: 9,
    name: 'note',
    difficulty: 'medium',
    cellsNumber: 100,
    matrix: [
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
  },

  {
    id: 10,
    name: 'snail',
    difficulty: 'medium',
    cellsNumber: 100,
    matrix: [
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 0, 1, 1, 0, 0],
      [1, 1, 1, 1, 0, 1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    ],
  },

  {
    id: 11,
    name: 'giraffes',
    difficulty: 'hard',
    cellsNumber: 225,
    matrix: [
      [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    ],
  },

  {
    id: 12,
    name: 'clover',
    difficulty: 'hard',
    cellsNumber: 225,
    matrix: [
      [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },

  {
    id: 13,
    name: 'skittles',
    difficulty: 'hard',
    cellsNumber: 225,
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
  },

  {
    id: 14,
    name: 'duck',
    difficulty: 'hard',
    cellsNumber: 225,
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    ],
  },

  {
    id: 15,
    name: 'mouse',
    difficulty: 'hard',
    cellsNumber: 225,
    matrix: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0],
      [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
    ],
  },
];

/* START GAME and CREATE FIELD */

const gameField = document.querySelector('.game-field');

function createGameField(game = nonograms[0].matrix) {
  if (game.length > 10) {
    gameField.classList.add('big-field');
  } else {
    gameField.classList.remove('big-field');
  }
  const rowTopPrompt = document.createElement('div'); // ряд с верхними подсказками
  rowTopPrompt.className = 'row-top';
  gameField.appendChild(rowTopPrompt);

  const emptyPlace = document.createElement('div'); // путой квадрат в верхнем ряду с подсказками
  emptyPlace.className = 'row-prompt';
  rowTopPrompt.appendChild(emptyPlace);

  // создает верхние подсказки
  for (let i = 0; i < game.length; i++) {
    const cellTopPrompt = document.createElement('div'); // создаем элемент для подсказок сверху
    if (i === 5 || i === 10) {
      cellTopPrompt.classList = 'top-prompt cell-border'; // добавление толстой линии
    } else {
      cellTopPrompt.className = 'top-prompt';
    }

    let counterTop = 0;

    for (let j = 0; j < game.length; j++) {
      const prompt = document.createElement('span'); // каждую подсказку оборачиваем в спан что бы выстроить их в колонку
      prompt.className = 'prompt';
      prompt.innerText = '';
      if (game[j][i] === 1) {
        counterTop++;
        if (j === game.length - 1) {
          prompt.innerText += counterTop;
          cellTopPrompt.appendChild(prompt);
        }
      } else {
        if (counterTop > 0) {
          prompt.innerText += counterTop;
          cellTopPrompt.appendChild(prompt);
          counterTop = 0;
        }
      }
    }

    rowTopPrompt.appendChild(cellTopPrompt);
  }

  // создание ячеек(клеток) для игры
  for (let i = 0; i < game.length; i++) {
    const rowCells = document.createElement('div'); // ряд подсказки и игровые клетки
    if (i === 5 || i === 10) {
      rowCells.classList = 'row-cells row-border'; // добавление толстой линии
    } else {
      rowCells.classList = 'row-cells';
    }

    const rowPrompt = document.createElement('div'); // ряд с подсказками слева
    rowPrompt.className = 'row-prompt';
    rowPrompt.innerText = '';
    rowCells.appendChild(rowPrompt);
    let counter = 0; // счеткик подсказок слева
    for (let j = 0; j < game[i].length; j++) {
      const cell = document.createElement('div'); // создание новой игровой клетки
      if (j === 5 || j === 10) {
        cell.classList = 'cell cell-border'; // добавление толстой линии
      } else {
        cell.className = 'cell';
      }

      cell.innerText = game[i][j];
      if (game[i][j] === 1) {
        counter++;
        if (j === game.length - 1) {
          rowPrompt.innerText += ` ${counter}`;
        }
      } else {
        if (counter > 0) {
          rowPrompt.innerText += ` ${counter}`;
          counter = 0;
        }
      }

      rowCells.appendChild(cell);
    }

    gameField.appendChild(rowCells);
  }
}
createGameField();

/* RANDOM GAME */

const randomBtn = document.querySelector('.random-game');

function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

randomBtn.addEventListener('click', function () {
  gameField.innerHTML = ''; // очишает поле для игры
  let numberLast = 0;
  let numberGame = randomNumber(0, 14);
  console.log(numberGame);
  if (numberLast === numberGame) {
    // проверка на повторении игры
    numberGame = randomNumber(0, 14);
    numberLast = numberGame;
  }
  createGameField(nonograms[numberGame].matrix);
});
