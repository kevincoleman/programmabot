# ProGrammaBot

## Basic Concepts
Top-down
2D retro-styled
Target 8–18yo
Made for mobile first
Made for browser, iOS, Android
Freemium model

You have a robotic gramma that you can send instructions to in order to navigate her through levels. Over time, you gain new abilities. You start off basic, with simple commands (left/right/up/down) and you gain other abilities later, like moving diagonally, jumping, &c.
 - starts out with walker?
 - voodoo grandma? Ghost in the shell!

## Starting levels
Levels 1 - 5
  Moving in basic sequence 
  Dying/failing
  Defining/achieving goals
  Dealing with obstacles
  
  Level 1:
    Moving in one direction

  Level 2:
    Moving in a sequence to make a turn (without falling off)

  Level 3:
    Introduce dying/failing

  Level 4:
    Completing a goal (waypoint)

  Level 5:
    Dealing with obstacles
      Running out of battery

## UI concepts to include
  Main menu view
  Basic map view
  Instruction Queue
  Help menu
    List of skills
  Objective (list)
    Stretch goals
  Battery
  Timer?
  Move count
  Death count
  Points

## Style Guide ideas
  
  64 x 64 pixels per item in a grid
  Define a color set similar to SNES
  Overlay for game metadata
    mobile-first

## Display Route Structure
  Parent View
    Level View
      Overlay for game metadata
      Tile structure View
        Tile contents
        Tile interactivity
      Environmental theming
    Menu View - operates independently from other content
    Character View
    Leaderboards
    Store view

## Tech stack ideas
  JavaScript / TypeScript?
  Central API (?)
  Game framework:
    [Phaser](https://phaser.io/tutorials/getting-started-phaser3)
    [Unity](?)
    []
  Architectural boundary definitions
    DB - GraphQL?
    API
    JS/TS front-end wrapper - exports to web, iOS, Android
      Game framework
      Test framework
        TDD:
          Write a failing test
          Write implementation to make it pass
          Write edge cases/regression tests
