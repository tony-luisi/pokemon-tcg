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
  console.log('response:', res.body.name)
  var pokemon = res.body
  var id = pokemon.id
  console.log('writing pokemon',id,pokemon.name)
  fs.writeFile('./pokemon/' + id + '.json', JSON.stringify(pokemon))
})
