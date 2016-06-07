# pokemon trading card game

## Currently in Development

WORK IN PROGRESS - A pokemon trading card game using react redux and express

___

### Install Instructions

+ git clone git@github.com:tony-luisi/pokemon-tcg.git
+ cd pokemon-tcg
+ npm i

### Technology stack
+ client-server
+ server: express
  - sessions
  - knex sqlite (dev) | postgres (prod)

### Design Considerations (work in progress)

#### Cards
{ name: "Bulbasaur" }

#### API
//getPlayerDeck
returns the players current deck
//newPlayerDeck
returns a new deck and resets any current score
//takeTurn
accepts a card and returns a winner

#### State MAP
+ player1
  - cards
+ player2
  - cards
