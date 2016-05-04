var fs = require('fs')


function getPokemonByNumber(num, callback){
  fs.readFile(__dirname + '/pokemon/'+num+'.json', 'utf-8', function(err, data){
    if (err){
      callback(err)
      return
    }
    callback(null, data)
  })
}


function getRandomPokemon(noOfPokemon, callback){
  var pokemonArray = []
  for(var i = 0; i < noOfPokemon; i++){
    var pokemon = fs.readFileSync(__dirname + '/pokemon/'+(i+1)+'.json', 'utf-8')
    pokemonArray.push(pokemon)
  }
  callback(null, pokemonArray)
}

getRandomPokemon(10, function(err, data){
  console.log(Object.keys(JSON.parse(data[0])))
  console.log(JSON.parse(data[0]).moves)
})
