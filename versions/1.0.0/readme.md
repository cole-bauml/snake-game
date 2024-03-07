# SnakeGameAPI
Version 1.0.0

We also allow you to set the ammount of rows and columns. For all customization features in version 1.0.0, [click me.](customize.md)

## Controls
    - Arrow Keys

DOWNLOAD SCRIPT: [Click Me](script.js)

# Code example/tutorial (you can copy this whole code):

```
<!DOCTYPE html>
<head>
    <title>Snake Game</title> 
</head>

<div id="game-container"></div>
<script src="script.js></script> <!-- Download the script and upload it in the same folder; the script is linked at the top of this document. -->

<script>
const snakegame = new snakeGame({
    divElementId: "game-container",
    url: "ENTER YOUR URL OR SITE NAME",
})
// We also allow you to set the ammount of rows, columns, and a ton of other settings. For all customization features, click the link at the top of this page.
</script>
```
# The Code Explained (above is the entire code)
I reccomend adding DOCTYPE html, as it makes the page look better:
```
<!DOCTYPE html>
<head>
    <title>Snake Game</title> 
</head>
```
Create the div where you want the game, and import the script AFTER the div
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