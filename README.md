# HTML5 塔防游戏


 * Author: [oldj](http://oldj.net/), [bubbafat](https://roberthorvick.com)
 * Email: oldj.wu@gmail.com, robert.horvick@gmail.com
 * Source (Current): https://github.com/bubbafat/html5-tower-defense
 * Source (Original): https://github.com/oldj/html5-tower-defense
 * License: MIT


## Run

Enter the `src` or `build` directory and open td.html with a browser (such as Chrome, IE9) to run the game.

Or check [Online Demo](https://bubbafat.github.io/html5-tower-defense/src/td.html).

## Description

 1. This game is completely implemented using HTML5 / JavaScript / CSS, and does not use Flash, SilverLight and other technologies.
 2. This version does not use pictures, all the objects in the game are drawn using HTML5.
 3. Some parts of this version have been specially optimized for IE9 and can run normally under IE9.

## Table of Contents

    /build Compressed and publishable files
    /screenshorts screenshot
    /src source code
        /css style sheet
        /js JavaScripts source file
    /tools gadgets, scripts
    /README.md this file


## Cheating method

To facilitate testing, this game has several cheating methods built in, just execute the following command in the command line:

 1. Add 1 million money: `_TD.cheat="money+";`  (press 'm' when is_debug is true)
 2. Double the difficulty: `_TD.cheat="difficulty+";`
 3. Difficulty is halved: `_TD.cheat="difficulty-";`  (press 'd' when is_debug is true)
 4. Health restoration: `_TD.cheat="life+";`  (press 'l' when is_debug is true)
 5. Reduce the health value to the lowest: `_TD.cheat="life-";`

Note that the above cheating methods are mainly designed for testing, please use them as appropriate during the normal game process, otherwise it may reduce the fun of the game.

## Update history

 - 2020-11-20 (bubbafat) Add quicksand (slows monsters), some cleanup, and changed targeting so lasers target weakest-first
 - 2015-09-06 Support retina display.
 - 2011-01-01 Adjusted the parameters, and based on the suggestions of netizens, added checks when building new buildings, and it is forbidden to surround monsters with buildings (v0.1.14).
 - 2010-12-29 According to the suggestions of netizens, add the function of automatic life recovery (5 points of life recovery every 5 waves, 10 points of life recovery every 10 waves). Adjust the parameters to reduce the range of the laser gun and increase the power of the heavy machine gun (v0.1.12).
 - 2010-12-18 Add a new weapon "Laser Gun" (v0.1.8.0).
 - 2010-12-12 Suspend the development of the image resource version branch, continue to optimize and develop the circle version (v0.1.7.0).
 - 2010-11-28 The first image resource version (v0.2.1.3267).
 - 2010-11-23 released [circle version (v0.1.6.2970)](http://oldj.net/article/html5-td-circle-version/).
 - 2010-11-14 The first version is released online.
 - 2010-11-11 Start writing this game.

## Development Plan

 - Added a new weapon "Cannon". Features: When hitting a monster, it will explode, causing a surface attack.
 - Added level editor.
 - Add the function of saving progress.
