/**
 * Mocking client-server processing
 */
const _cards = [
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

const TIMEOUT = 100

export default {
  getCards(cb, timeout) {
    setTimeout(() => cb(_cards), timeout || TIMEOUT)
  }
}
