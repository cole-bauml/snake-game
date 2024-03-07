let b;
let DEFAULTblockSize = 25;
let DEFAULTrows = 20;
let DEFAULTcols = 20;
let divElementId;
let game_blockSize;
let game_rows;
let game_cols;
let game_backgroundcolor
let game_playercolor;
let game_foodcolor;
class snakeGame {
    constructor({ divElementId, url, blockSize, cols, rows, backgroundColor, playerColor, foodColor }) {
        // ROWS and COLS and BLOCKSIZE CUSTOMIZATION
        if (rows != undefined) {
            game_rows = rows;
        }
        if (cols != undefined) {
            game_cols = cols;
        }
        if (blockSize != undefined) {
            game_blockSize = blockSize;
        }

        if (rows === undefined) {
            game_rows = DEFAULTrows;
        }
        if (cols === undefined) {
            game_cols = DEFAULTcols;
        }
        if (blockSize === undefined) {
            game_blockSize = DEFAULTblockSize;
        }

        // COLORS CUSTOMIZATION
        if (backgroundColor != undefined) {
            game_backgroundcolor = backgroundColor;
        }
        if (playerColor != undefined) {
            game_playercolor = playerColor;
        }
        if (foodColor != undefined) {
            game_foodcolor = foodColor;
        }

        if (backgroundColor === undefined) {
            game_backgroundcolor = "#808080";
        }

        if (foodColor === undefined) {
            game_foodcolor = "white";
        }

        if (playerColor === undefined) {
            game_playercolor = "cornflowerblue";
        }





        var stylehtml = `
<style>
    body, p {
        background-color: #ecf0f1;
        color: #333333;
        font-family: Arial, sans-serif;
        text-align: center;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: bold;
    }

    a {
        color: #2e86c1;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    button {
        background-color: #2e86c1;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: #2978a0;
    }
</style>
        `
        document.body.insertAdjacentHTML("afterend", stylehtml)
        b = document.getElementById(`${url}-board`)
        divElementId = divElementId;
        playMore(url, divElementId)
        createBoard(divElementId, url)
    }
}

function createBoard(divElementId, url) {
    var container = document.getElementById(`${divElementId}`);
    if (container === null) {
        alert("The specified game container does not exist.")
    }
    else {
        console.log(container)
        document.body.style = "padding: 0; margin: 0;"
        container.style = "width: 100%; height: 100%";
        var title = document.createElement('h1');
        title.id = "titleelement"
        title.textContent = "Snake Game";
        container.appendChild(title);

        if (b) {
            document.body.innerHTML = `<br><br>DO NOT USE THE FOLLOWING ID ON ANY ELEMENTS: <br><br>"${url}-board"`
            return;
        }
        console.log("Board does not exist")
        const board = `<canvas id="${url}-board"></canvas>`;
        document.getElementById('titleelement').insertAdjacentHTML("afterend", board);


        var scorehtml = `
            <h1 id="scoretext">Score: </h1>
        `
        document.getElementById(`${url}-board`).insertAdjacentHTML("afterend", scorehtml);
        document.getElementById('scoretext').textContent = `Score: 1`
        // Set up the game container

        createGame(url, divElementId)
    }
}



function playMore(url, divElementId) {
    if (document.getElementById(divElementId) === null) {
        document.body.innerHTML = `<br><br>THE FOLLOWING ID DOES NOT EXIST ON ANY DIV ELEMENTS: <br><br>${divElementId}<br><br>TO INCLUDE IT, ADD THE FOLLOWING CODE TO YOUR HTML!<br><br>&lt;div id="${divElementId}"&gt;&lt;/div&gt;`;
    }
    console.log(`DIV ELEMENT ID: ${divElementId}`)
    const playmoremessage = `<p>Play more games at: ${url}</p>`
    document.getElementById(divElementId).insertAdjacentHTML("beforeend", playmoremessage)
    console.log(`Play more message displayed with url: ${url}`)
}






function createGame(url) {
    var backgroundColor = game_backgroundcolor;
    var playerColor = game_playercolor;
    var foodColor = game_foodcolor;
    var rows = game_rows;
    var cols = game_cols;
    var blockSize = game_blockSize;
    let length = 0;
    let gameover;
    let snakeX = Math.floor(Math.random() * cols) * blockSize;
    let snakeY = Math.floor(Math.random() * rows) * blockSize;
    let bodyBlocks = []
    blockSize = game_blockSize
    const canvas = document.getElementById(`${url}-board`);
    canvas.width = cols * blockSize;
    canvas.height = rows * blockSize;
    canvas.style.border = "3px solid"

    const ctx = canvas.getContext("2d")
    console.log(ctx)
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "white";
    ctx.fillRect(snakeX, snakeY, blockSize, blockSize)


    // FOOD RANDOMIZE:
    let foodX = Math.floor(Math.random() * cols) * blockSize;
    let foodY = Math.floor(Math.random() * rows) * blockSize;

    ctx.fillStyle = "cornflowerblue";
    ctx.fillRect(foodX, foodY, blockSize, blockSize)

    let movingX = 0;
    let movingY = 0;
    let direction;

    let canTrigger = true;
addMovement();

    let lastPressed = 0;
    function addMovement(e) {
        document.body.addEventListener('keyup', function (e) {
            executeAction(e);
        });
        let lastExecutionTime = 0;
        function executeAction(e) {
            const currentTime = Date.now();
            if(lastExecutionTime === 0){
                lastExecutionTime = currentTime;
                moveSnakeDirection(e);
            }
            if (currentTime - lastExecutionTime >= 80) {
                // execute the action
                console.log("Action executed!");
                moveSnakeDirection(e)

                // update the last execution time
                lastExecutionTime = currentTime;
            } else {
                console.log("Action not executed. Please wait at least 1 second.");

            }
        }

        function moveSnakeDirection(e) {
            if (e.code == "ArrowUp" | e.code == "KeyW") {
                if (movingY != 1) {
                    movingY = -1;
                    movingX = 0;
                    direction = "up";
                    lastPressed = "w";
                    checkOutside();
                }

            }
            if (e.code == "ArrowLeft" | e.code == "KeyA") {
                if (movingX != 1) {
                    movingX = -1;
                    movingY = 0;
                    direction = "left"
                    lastPressed = "a"
                    checkOutside();
                }

            }
            if (e.code == "ArrowRight" | e.code == "KeyD") {
                if (movingX != -1) {
                    movingX = 1;
                    movingY = 0;
                    direction = "right"
                    lastPressed = "d"
                    checkOutside();
                }

            }
            if (e.code == "ArrowDown" | e.code == "KeyS") {
                if (movingY != -1) {
                    movingY = 1;
                    movingX = 0;
                    direction = "down"
                    lastPressed = "s"
                    checkOutside();
                }

            }
        }

        setInterval(checkOutside, 100)
        function checkOutside() {
            if (gameover === true) {
                return;
            }
            if (snakeX < 0 | snakeY < 0) {
                gameOver();
            }
            if (snakeX > cols * blockSize - blockSize | snakeY > rows * blockSize - blockSize) {
                gameOver();
            }
        }
    }

    // Move the snake every 100 milliseconds
    setInterval(moveSnake, 100);

    function moveSnake() {
        if (gameover === true) {
            return;
        }
        // Move the body by adding the current position to the array
        bodyBlocks.push({ x: snakeX, y: snakeY });

        // If the body is longer than the current length, remove the oldest position
        if (bodyBlocks.length > length) {
            bodyBlocks.shift();
        }

        // Update the position of the snake based on the current direction
        snakeX += movingX * blockSize;
        snakeY += movingY * blockSize;

        // Redraw the canvas with the updated snake position and body
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = playerColor;
        ctx.fillRect(snakeX, snakeY, blockSize, blockSize);
        ctx.fillStyle = foodColor;
        ctx.fillRect(foodX, foodY, blockSize, blockSize);

        // Draw rectangles for each position in the body array
        for (let i = 0; i < bodyBlocks.length; i++) {
            ctx.fillStyle = playerColor;
            ctx.fillRect(bodyBlocks[i].x, bodyBlocks[i].y, blockSize, blockSize);
        }
        for (let i = 0; i < bodyBlocks.length; i++) {
            if (bodyBlocks[i].x === snakeX && bodyBlocks[i].y === snakeY) {
                gameOver();
            }
        }

        // CHECK FOR FOOD COLLISION:
        if (snakeX === foodX && snakeY === foodY) {
            length = length + 1;
            lengthfix = length + 1;
            console.log(`Length:` + lengthfix);
            document.getElementById('scoretext').textContent = `Score: ${lengthfix}`
            // Generate new food location
            foodX = Math.floor(Math.random() * cols) * blockSize;
            foodY = Math.floor(Math.random() * rows) * blockSize;
        }
    }

    function gameOver() {
        ctx.fillStyle = "rgba(255,255,255,0.5)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        document.body.removeEventListener('keyup', addMovement)
        gameover = true;
        var text = "Game Over";
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        ctx.font = "35px sans-serif"
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, x, y);



    }
}