# SnakeGameAPI
An easy snake game you can include in your website.

We also allow you to set the ammount of rows and columns, and all colors. For all customization features, [click me.](customize.md)

## Controls
    - Arrow Keys
    - W,A,S,D

DOWNLOAD SCRIPT: [Click Me](script.js)

# Code example:

```
<!DOCTYPE html>
<head>
    <title>Snake Game</title> 
</head>

<div id="game-container"></div>
<script src="script.js"></script> <!-- Download the script and upload it in the same folder; the script is linked at the top of this document. -->

<script>
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
})
// We also allow you to set the ammount of rows, columns, and a ton of other settings. For all customization features, click the link at the top of this page.
</script>
```
# The Code Explained (above is the entire code)
Title the page:
```
<head>
    <title>Snake Game</title> 
</head>
```
Create the div the game will be played in, and import the script.
```
<div id="game-container"></div>
<script src="script.js></script> <!-- Download the script and upload it in the same folder; the script is linked at the top of this document. -->
```
Then, initialize a new snake game:
```
<script>
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
})
// We also allow you to set the ammount of rows, columns, and a ton of other settings. For all customization features, click the link at the top of this page.
</script>
```