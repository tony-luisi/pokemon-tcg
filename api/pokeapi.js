var request = require('superagent')
var fs = require('fs')

function getPokemonByNumber(number, callback){
  request
    .get('http://pokeapi.co/api/v2/pokemon/'+ number)
    .end(function(err, res){
      if (err){
        callback(err)
        return
      }
      callback(null, res)
    })
}
getPokemonByNumber(1, function(err, res){
  var pokemon = res.body
  var id = pokemon.id
  fs.writeFile('./pokemon/' + id + '.json', JSON.stringify(pokemon))
})
