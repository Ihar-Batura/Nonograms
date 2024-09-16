import './style.css';

/* START CREATE BODY */
const body = document.querySelector('body');
const headerEl = document.createElement('header');
headerEl.className = 'header';
headerEl.innerHTML = `
<div class="wrapper">
        <div class="header-container">
          <h1><a href="./index.html">Nonograms</a></h1>
          <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav>
            <ul class="navigation">
              <li><a href="#levels">Select level</a></li>
              <li><a class="random-game" href="#game">Start random</a></li>
              <li><a href="#table">Score table</a></li>
              <li><a class="theme-btn" href="#">Change theme</a></li>
            </ul>
          </nav>
        </div>
      </div>
`;
body.appendChild(headerEl);

const main = document.createElement('main');
main.innerHTML = `
<div class="wrapper">
        <section id="levels">
          <h2>Choose a level for the game:</h2>
          <div class="level">
            <p>Easy <span>(5x5)</span></p>
            <div class="levels-container">
              <a id="4" href="#game">
                <div class="level-card">
                  <div class="level-img img-smile"></div>
                  <p>smile</p>
                </div>
              </a>
              <a id="1" href="#game">
                <div class="level-card">
                  <div class="level-img img-dog"></div>
                  <p>dog</p>
                </div>
              </a>
              <a id="5" href="#game">
                <div class="level-card">
                  <div class="level-img img-scull"></div>
                  <p>scull</p>
                </div>
              </a>
              <a id="3" href="#game">
                <div class="level-card">
                  <div class="level-img img-tower"></div>
                  <p>tower</p>
                </div>
              </a>
              <a id="2" href="#game">
                <div class="level-card">
                  <div class="level-img img-plane"></div>
                  <p>plane</p>
                </div>
              </a>
            </div>
          </div>
          <div class="level">
            <p>Medium <span>(10x10)</span></p>
            <div class="levels-container">
              <a id="7" href="#game">
                <div class="level-card">
                  <div class="level-img img-question"></div>
                  <p>question</p>
                </div>
              </a>
              <a id="9" href="#game">
                <div class="level-card">
                  <div class="level-img img-note"></div>
                  <p>note</p>
                </div>
              </a>
              <a id="6" href="#game">
                <div class="level-card">
                  <div class="level-img img-tv"></div>
                  <p>tv</p>
                </div>
              </a>
              <a id="10" href="#game">
                <div class="level-card">
                  <div class="level-img img-snail"></div>
                  <p>snail</p>
                </div>
              </a>
              <a id="8" href="#game">
                <div class="level-card">
                  <div class="level-img img-tea"></div>
                  <p>tea</p>
                </div>
              </a>
            </div>
          </div>
          <div class="level">
            <p>Hard <span>(15x15)</span></p>
            <div class="levels-container">
              <a id="12" href="#game">
                <div class="level-card">
                  <div class="level-img img-clover"></div>
                  <p>clover</p>
                </div>
              </a>
              <a id="14" href="#game">
                <div class="level-card">
                  <div class="level-img img-duck"></div>
                  <p>duck</p>
                </div>
              </a>
              <a id="15" href="#game">
                <div class="level-card">
                  <div class="level-img img-mouse"></div>
                  <p>mouse</p>
                </div>
              </a>
              <a id="11" href="#game">
                <div class="level-card">
                  <div class="level-img img-giraffes"></div>
                  <p>giraffes</p>
                </div>
              </a>
              <a id="13" href="#game">
                <div class="level-card">
                  <div class="level-img img-skittles"></div>
                  <p>skittles</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="game">
          <div class="game-container">
            <div class="game-field__container">
              <div class="game-field"></div>
            </div>
            <div class="game-buttons">
              <div class="timer">
                <span class="interval-hours">00</span>
                <span class="dots">:</span>
                <span class="interval-minutes">00</span>
                <span class="dots">:</span>
                <span class="interval-seconds">00</span>
              </div>
              <button class="game-btn reset-button">Reset game</button>
              <button class="game-btn solution">Show solution</button>
              <button class="game-btn">Sound on/off</button>
              <button class="game-btn save-btn">Save game</button>
              <button class="game-btn continue-btn">Continue last game</button>
            </div>
          </div>
        </section>
        <section id="table">
          <div class="table-container">
            <table class="table-score">
              <caption class="table-caption">
                Score table:
              </caption>
              <thead>
                <tr>
                  <th>Puzzle name:</th>
                  <th>Difficulty:</th>
                  <th>Result:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
`;

body.appendChild(main);

const footer = document.createElement('footer');
footer.className = 'footer';
footer.innerHTML = `
<div class="wrapper">
        <div class="footer-container">
          <p>2024</p>
          <p>Ihar Batura</p>

          <div class="contacts-container">
            <a href="https://github.com/Ihar-Batura" target="_blank">
              <div class="contact-img img-git"></div>
            </a>
            <a
              href="https://discordapp.com/users/925457041785512027/"
              target="_blank"
            >
              <div class="contact-img img-discord"></div>
            </a>
            <a href="mailto:a17331582@gmail.com">
              <div class="contact-img img-email"></div>
            </a>
          </div>
        </div>
      </div>
`;

body.appendChild(footer);

const modalEl = document.createElement('div');
modalEl.className = 'modal';
modalEl.innerHTML = `
<div class="modal-window">
        <h2>
          "Great! You have solved the nonogram in
          <span class="modal-time"></span> seconds!"
        </h2>
        <div class="modal-img"></div>
        <button class="game-btn modal-btn">Play again</button>
      </div>
`;

body.appendChild(modalEl);

/* FINISH CREATE BODY */

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

/* BURGER */
const btnBurger = document.querySelector('.burger-menu');
const header = document.querySelector('.header-container');

const burgerList = document.querySelectorAll('.navigation li a');
let burgerFlag = false;

function openBurger() {
  burgerFlag = !burgerFlag;
  if (burgerFlag) {
    btnBurger.classList.add('active');
    header.classList.add('active');
    body.classList.add('unscroll');
  } else {
    btnBurger.classList.remove('active');
    header.classList.remove('active');
    body.classList.remove('unscroll');
  }
}

btnBurger.addEventListener('click', openBurger);
burgerList.forEach((li) => {
  li.addEventListener('click', () => {
    btnBurger.classList.remove('active');
    header.classList.remove('active');
    body.classList.remove('unscroll');
    burgerFlag = false;
  });
});

/* START GAME and CREATE FIELD */

const gameField = document.querySelector('.game-field');
let gameNow;

function createGameField(game = nonograms[0].matrix) {
  gameNow = game; // кладем  переменную игру для повторной отрисовки через ресет

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
  startTimer();
  fillCell();
  markCell();
  checkWin();
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
  resetTimer();
});

/* CHOOSE A LEVEL */
const levels = document.querySelectorAll('.levels-container a');
levels.forEach((level) =>
  level.addEventListener('click', () => {
    gameField.innerHTML = ''; // очишает поле для игры
    createGameField(nonograms[level.id - 1].matrix);
    resetTimer();
  })
);

/* TIMER */

const timerHours = document.querySelector('.interval-hours');
const timerMinutes = document.querySelector('.interval-minutes');
const timerSeconds = document.querySelector('.interval-seconds');
const timerStop = document.querySelector('.solution');
const timerReset = document.querySelector('.reset-button');

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;

const startTime = () => {
  seconds++;
  timerSeconds.innerHTML = seconds;
  if (seconds <= 9) {
    timerSeconds.innerHTML = '0' + seconds;
  }
  if (seconds > 9 && seconds <= 99) {
    timerSeconds.innerHTML = seconds;
  }
  if (seconds == 100) {
    timerSeconds.innerHTML = '00';
    minutes++;
    timerMinutes.innerHTML = '0' + minutes;
    seconds = 0;
  }
  if (minutes > 9) {
    timerMinutes.innerHTML = minutes;
  }

  if (minutes > 59) {
    hours++;
    timerHours.innerHTML = '0' + hours;
    minutes = 0;
    timerMinutes.innerHTML = '0' + minutes;
  }
  if (hours > 9) {
    timerHours.innerHTML = hours;
  }
};

let flagTimer; // флаг для первого запуска таймера
function startTimer() {
  const timerStart = document.querySelectorAll('.cell');

  // Запускает таймер
  timerStart.forEach((cell) =>
    cell.addEventListener('click', function () {
      if (!flagTimer) {
        // не затормаживает таймер при повторном клике
        clearInterval(interval); //не дает ускоряться интервалу!
        interval = setInterval(startTime, 1000);
        flagTimer = true;
      }
    })
  );
}

//Останавливает таймер
timerStop.addEventListener('click', function () {
  clearInterval(interval);
});

function resetTimer() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerHours.innerHTML = '00';
  timerMinutes.innerHTML = '00';
  timerSeconds.innerHTML = '00';
  flagTimer = false; // меняет флаг что бы можно было снова запустить таймер
}

// Сбрасывает таймер при новой игре
timerReset.addEventListener('click', resetTimer);

/* RESET GAME */

const resetBtn = document.querySelector('.reset-button');

resetBtn.addEventListener('click', () => {
  gameField.innerHTML = ''; // очишает поле для игры
  createGameField(gameNow); //отрисовывает этот же уровень
});

/* FILL CELLS */

function fillCell() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) =>
    cell.addEventListener('click', () => {
      cell.classList.remove('cross');
      cell.classList.toggle('fill');
    })
  );
}

/* MARK CELLS */

function markCell() {
  const cells = document.querySelectorAll('.cell');

  cells.forEach((cell) =>
    cell.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      cell.classList.remove('fill');
      cell.classList.toggle('cross');
    })
  );
}

/* SHOW SOLUTION */

const solutionBtn = document.querySelector('.solution');

solutionBtn.addEventListener('click', () => {
  gameField.innerHTML = ''; // очишает поле для игры
  createGameField(gameNow); //отрисовывает этот же уровень
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (cell.innerText === '1') {
      cell.classList.add('fill');
    }
  });
});

/* WIN CHECK*/

function checkWin() {
  const checkWinCells = document.querySelectorAll('.cell');
  checkWinCells.forEach((checkCell) => {
    checkCell.addEventListener('click', winGame);
  });

  function winGame() {
    const cells = document.querySelectorAll('.cell');
    let count = 0;
    cells.forEach((cell) => {
      if (cell.innerText === '1') {
        count++;
        if (cell.innerText === '1' && cell.classList.value.includes('fill')) {
          count--;
        }
      }
      if (cell.innerText === '0' && cell.classList.value.includes('fill')) {
        count++;
      }
    });
    if (count === 0) {
      showModal();
    }
  }
  //логика - проходим по ячейкам, если содержимое ячейки 1 и она закрашена отнимаем один от счетчкика( если ноль закрашен добавляем 1)
}

/* MODAL WINDOW*/
function showModal() {
  const modal = document.querySelector('.modal');
  const modalTime = document.querySelector('.modal-time');
  const hours = document.querySelector('.interval-hours').innerHTML;
  const minutes = document.querySelector('.interval-minutes').innerHTML;
  const seconds = document.querySelector('.interval-seconds').innerHTML;
  modalTime.innerText = `${hours}:${minutes}:${seconds}`;
  modal.classList.add('show-modal');
  clearInterval(interval); // stop timer
  saveResult(); // save result in local storage
  showFiveResults();
}

const playAgainBtn = document.querySelector('.modal-btn');

playAgainBtn.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('show-modal');
  gameField.innerHTML = ''; // очишает поле для игры
  createGameField(gameNow); //отрисовывает этот же уровень (кнопка play again подразумевает играть этот же уровень)
  resetTimer(); // сбрасываем таймер на ноль
});

/* SAVE GAME IN LOCAL STORAGE*/
const saveBtn = document.querySelector('.save-btn');
function saveGame() {
  const cells = document.querySelectorAll('.cell'); // находим все игровые ячейки
  const array = [];
  cells.forEach((cell) => {
    if (
      cell.innerText === '1' &&
      !cell.classList.value.includes('fill') &&
      !cell.classList.value.includes('cross')
    ) {
      array.push(1);
    } else if (
      cell.innerText === '1' &&
      cell.classList.value.includes('fill')
    ) {
      array.push(2);
    } else if (
      cell.innerText === '1' &&
      cell.classList.value.includes('cross')
    ) {
      array.push(3);
    } else if (
      cell.innerText === '0' &&
      !cell.classList.value.includes('fill') &&
      !cell.classList.value.includes('cross')
    ) {
      array.push(0);
    } else if (
      cell.innerText === '0' &&
      cell.classList.value.includes('fill')
    ) {
      array.push(-1);
    } else if (
      cell.innerText === '0' &&
      cell.classList.value.includes('cross')
    ) {
      array.push(-2);
    }
  });
  localStorage.setItem('nonogramLastGame', JSON.stringify(array));
  // логика - проходимся по ячейкам, у каждой ячейки может быть три состояния в зависимости от содержнаия ячейки. Создаем массив, после при отрисовке изменяем значение и добавляем нужный класс для стилий
}

saveBtn.addEventListener('click', saveGame);

/* CONTINUE LAST GAME*/

const continueGameBtn = document.querySelector('.continue-btn');

continueGameBtn.addEventListener('click', () => {
  const lastSaveGame = JSON.parse(localStorage.getItem('nonogramLastGame'));

  gameField.innerHTML = ''; // очишает поле для игры
  createGameField(gameNow); //отрисовывает этот же уровень
  const cells = document.querySelectorAll('.cell'); // находим все игровые ячейки
  let counter = 0;
  cells.forEach((cell) => {
    if (lastSaveGame[counter] === 1) {
      cell.innerText = '1';
    } else if (lastSaveGame[counter] === 2) {
      cell.innerText = '1';
      cell.classList.add('fill');
    } else if (lastSaveGame[counter] === 3) {
      cell.innerText = '1';
      cell.classList.add('cross');
    } else if (lastSaveGame[counter] === 0) {
      cell.innerText = '0';
    } else if (lastSaveGame[counter] === -1) {
      cell.innerText = '0';
      cell.classList.add('fill');
    } else if (lastSaveGame[counter] === -2) {
      cell.innerText = '0';
      cell.classList.add('cross');
    }
    counter++;
  });
});

/* SAVE LAST RESULT TO LOCAL STORAGE*/

function saveResult() {
  let name;
  let difficulty; //получаем имя и сложность нонограммы
  nonograms.forEach((nonogram) => {
    if (nonogram.matrix === gameNow) {
      name = nonogram.name;
      difficulty = nonogram.difficulty;
    }
  });

  const hours = document.querySelector('.interval-hours').innerHTML;
  const minutes = document.querySelector('.interval-minutes').innerHTML;
  const seconds = document.querySelector('.interval-seconds').innerHTML;
  const time = `${hours}:${minutes}:${seconds}`;
  const userResult = {
    name: `${name}`,
    difficulty: `${difficulty}`,
    result: `${time}`,
  };

  // логика - делаем запрос в локал сторадж, если есть массив с результатами получаем его добавляем новый результат сохраняем снова в локал сторадж. Если  это первый результат, создаем массив и сохраняем в локал сторадж
  const resultLSArray = JSON.parse(localStorage.getItem('resultList'));
  if (resultLSArray === null) {
    const usersResults = [];
    usersResults.push(userResult);
    localStorage.setItem('resultList', JSON.stringify(usersResults));
  } else {
    let resultArray = resultLSArray;
    resultArray.push(userResult);
    localStorage.setItem('resultList', JSON.stringify(resultArray));
  }
}

/* SHOW 5 THE BEST RESULTS*/
function showFiveResults() {
  const arrResults = JSON.parse(localStorage.getItem('resultList'));
  if (arrResults !== null) {
    // сортируем массив с результатами
    let arrSortedResults = arrResults.sort(function (a, b) {
      if (a.result > b.result) {
        return 1;
      }
      if (a.result < b.result) {
        return -1;
      }
      return 0;
    });

    const tableList = document.querySelectorAll('tbody tr'); // находим все строки в таблице
    let count = 0;
    tableList.forEach((string) => {
      if (arrSortedResults !== null && arrSortedResults[count] !== undefined) {
        string.children[0].innerText = arrSortedResults[count].name; // присваеваем значение каждому полю в строке если оно есть
        string.children[1].innerText = arrSortedResults[count].difficulty;
        string.children[2].innerText = arrSortedResults[count].result;
      }
      count++;
    });
  }
}
showFiveResults();

/* CHANGE THEME */

const themeBtn = document.querySelector('.theme-btn');
let themeFlag = false;

function changeTheme() {
  themeFlag = !themeFlag;
  if (!themeFlag) {
    document.documentElement.style.setProperty('--clr-text-light', '#e2f0ed');
    document.documentElement.style.setProperty(
      '--clr-text-light-hover',
      '#ecc5bd'
    );
    document.documentElement.style.setProperty('--clr-body-light', '#f5edeb');
    document.documentElement.style.setProperty(
      '--clr-body-text-light',
      '#420c0d'
    );
    document.documentElement.style.setProperty(
      '--clr-header-footer-light',
      '#3d2d66'
    );
  } else {
    document.documentElement.style.setProperty('--clr-text-light', '#d0ef88');
    document.documentElement.style.setProperty(
      '--clr-text-light-hover',
      '#87bf02'
    );
    document.documentElement.style.setProperty('--clr-body-light', '#b7badb');
    document.documentElement.style.setProperty(
      '--clr-body-text-light',
      '#282d1b'
    );
    document.documentElement.style.setProperty(
      '--clr-header-footer-light',
      '#0c103a'
    );
  }
}

themeBtn.addEventListener('click', changeTheme);
