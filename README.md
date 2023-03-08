
# Sapper VK

The project was made as a solution to a test assignment for a VK internship

## Content
- [Live Demo](https://github.com/egor-denisov/sapper-vk#live-demo)
- [Final product](https://github.com/egor-denisov/sapper-vk#final-product)
- [Running the project](https://github.com/egor-denisov/sapper-vk#running-the-project)
- [About the game](https://github.com/egor-denisov/sapper-vk#about-the-game)
- [Features](https://github.com/egor-denisov/sapper-vk#features)
- [Dependencies](https://github.com/egor-denisov/sapper-vk#dependencies)
- [Credits](https://github.com/egor-denisov/sapper-vk#credits)

## Live Demo
Live demo is implemented using [versel](https://vercel.com/). You can look at the project by clicking on the links:
- https://sapper-vk.vercel.app/
- https://sapper-vk-egor-denisov.vercel.app/
## Final product

- Start field
![](https://sun9-west.userapi.com/sun9-49/s/v1/ig2/Z5qJKfWzdAFjsnQMWfN7AWfWfKn_VULknmnYs_js3sPPmV8Ukv2FyXMO2i9gZgs0LYyw0RdfQeopp_kEZnYJBnM3.jpg?size=1920x924&quality=95&type=album "Start field")
- Losing field
![](https://sun9-east.userapi.com/sun9-74/s/v1/ig2/CAthioehI3AYabz-PSnzaa7HdXLX2CrtG3j0T8HwwhdUtbHmHXtstoBnJvou23Si6or8ssz8jfxwaqvM-kdExXGP.jpg?size=1917x931&quality=95&type=album "Losing field")
- Winning field
![](https://sun9-west.userapi.com/sun9-10/s/v1/ig2/3WP7LVb0r6XDbzapHaWUbmzuKQBTJmJ6ezIAEF8K6hLZ05URFkvV1O_UrRCpP2T2qN203Ts_iNYmZmQaHd-8UBFZ.jpg?size=1917x929&quality=95&type=album "Winning field")
- During field
![](https://sun9-east.userapi.com/sun9-19/s/v1/ig2/Sm_5CYPuSRT9b1ZqDffo1hF2KxYDcoW183B56EdzNabqxozhFo1NhoBpw-sHfzwEH6sdYFsz5y3hl1m0ViwBo_5h.jpg?size=1920x932&quality=95&type=album "During field")

## Running the project
To run the project go to the downloaded directory. Then run the commands:

```
# Run app on 3000 port
# Install missing packages
npm install
# Start index.js
npm start 
```

Аfter executing these commands, you can go to http://localhost:3000/

## About the game

A classic minesweeper game in which you need to open all the cells without mines.
- Field 16x16
- 40 mines
- In the upper left corner there is a counter of mines not marked with a flag
- In the upper right corner there is a stopwatch
- Cells can be set with a flag (right-click) or a question (right-click again)
- To restart the game, click on the smiley face in the center
## Features

- When you click on a cell and move to another one, the one that is now under the mouse cursor will open
- By clicking on an open non-empty cell, you can view its "neighbors"
- If the number of flags on the field becomes 40 (the number of mines), then it becomes impossible to put flags
- The user's first click never hits a mine
- In case of defeat, the fields in which the flags were incorrectly placed are highlighted in red

## Dependencies
- React.js
- Redux
- Typescript
- SCSS

## Credits

- I took the idea of appearance and functionality [from here](https://xn--80a4adb6f.com/)
