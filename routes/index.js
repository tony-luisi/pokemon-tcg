var express = require('express');
var router = express.Router();
var fs = require('fs')
var UUID = require('uuid-js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pokemon Card Game' });
});

router.get('/cards', function(req, res, next){
  res.send(cards)
})

router.get('/start', function(req, res, next){
  if (!req.session){
    req.session.id = UUID.create()
    req.session.score = 0
  }
  res.render('start')
})

router.get('/uuid', function(req, res, next){
  res.send(req.session.id)
})

router.get('/newGame', function(req, res, next){
  req.session.score = 0
  req.session.computerScore = 0
  req.session.playerCards = [].concat(cards)
  req.session.computerCards = [].concat(cards)
  res.send(req.session.playerCards)
})

router.post('/playCard', function(req,res,next){
  //receive the card
  //see if it is a card in the players deck
  //if it is, computer picks a random card from its own deck (that card is removed from the computers deck)
  //check to see which card wins
  //whoever the winner is.. add a point to the winners score
  //send the computer card, player card, the winner, the updated scores
  const result = {
    winner: "player",
    computerScore: 1,
    playerScore: 1,
    playerCard: {
        id: 1,
        name: "Bulbasaur",
        attack: 10,
        defense: 5
      },
    computerCard: {
      id: 2,
      name: "Charmander",
      attack: 5,
      defense: 10
    }
  }
  res.json(result)
})

router.get('/playCard', function(req,res,next){
  const result = {
    winner: "player",
    computerScore: 1,
    playerScore: 1,
    playerCard: {
        id: 1,
        name: "Bulbasaur",
        attack: 10,
        defense: 5
      },
    computerCard: {
      id: 2,
      name: "Charmander",
      attack: 5,
      defense: 10
    }
  }
  res.json(result)
})

module.exports = router;

const cards = [
  {
    id: 1,
    name: "Bulbasaur",
    attack: 10,
    defense: 5
  },
  {
    id: 2,
    name: "Charmander",
    attack: 5,
    defense: 10
  },
  {
    id: 3,
    name: "Charizard",
    attack: 5,
    defense: 10
  },
  {
    id: 4,
    name: "Venasaur",
    attack: 5,
    defense: 10
  },
  {
    id: 5,
    name: "Meowth",
    attack: 5,
    defense: 10
  },
  {
    id: 6,
    name: "Pikachu",
    attack: 5,
    defense: 10
  },
  {
    id: 7,
    name: "Raichu",
    attack: 5,
    defense: 10
  },
  {
    id: 8,
    name: "Mewtwo",
    attack: 5,
    defense: 10
  },
  {
    id: 9,
    name: "Raticate",
    attack: 5,
    defense: 10
  },
  {
    id: 10,
    name: "Pigeotto",
    attack: 5,
    defense: 10
  },
]
