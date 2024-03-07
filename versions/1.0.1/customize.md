## If you haven't setup snake yet...
[Click here for instructions on setting up snake!](../../README.md)


## Skip to where you need to be...
- [Color Changes](#color-changes)
  - [PlayerColor](#color-changes)
  - [FoodColor](#color-changes)
  - [Background Color](#color-changes)
- [Game Changes](#game-changes)
  - [Rows](#game-changes)
  - [Columns](#game-changes)
  - [Block Size](#game-changes)

## Color Changes

### PlayerColor (Default is white):
```
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
    rows: 20,
    playerColor: "red" // Default is white
})
```
### FoodColor (Default is cornflowerblue):
```
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
    cols: 10,
    foodColor: "blue" // Default is cornflowerblue
})
```
### Background Color (Default is gray):
```
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
    blockSize: 30,
    backgroundColor: "black" // Default is gray
})
```
## Game Changes

### Rows (Default is 20):
```
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
    rows: 10,
})
```
### Columns (Default is 20):
```
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
    cols: 10,
})
```
### Block Size (Default is 25):
```
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
    blockSize: 30,
})
```
