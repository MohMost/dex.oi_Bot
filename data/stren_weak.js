
//? SINGLE TYPE weaknesses AND strength list

const typeWS = {
  bug: { 
    weakness: ["<:fire:1071549557525188629> Fire", "flying", "rock","ㅤ","ㅤ"],
    strength: ["<:grass:1071554441083367545> Grass", "psychic", "dark","ㅤ","ㅤ"]
  },
  dragon: {
    weakness: ["dragon", "fairy","ㅤ","ㅤ"],
    strength: ["dragon","ㅤ","ㅤ","ㅤ","ㅤ"]
  },
  fairy: {
    weakness: ["poison", "steel","ㅤ","ㅤ","ㅤ"],
    strength: ["fighting", "dragon", "dark","ㅤ","ㅤ"]
  },
  fire: {
    weakness: ["<:water:1071554488109899776> Water", "Rock", "Dragon","ㅤ","ㅤ"],
    strength: ["<:grass:1071554441083367545> Grass", "Ice", "<:bug:1071554493247918221> Bug", "steel","ㅤ"]
  },
  fighting: {
    weakness: ["flying", "psychic", "fairy","ㅤ","ㅤ"],
    strength: ["normal", "rock", "steel", "ice", "dark"]
  },
  flying: {
    weakness: ["rock", "electric", "ice","ㅤ","ㅤ"],
    strength: ["<:grass:1071554441083367545> Grass", "Fighting", "<:bug:1071554493247918221> Bug","ㅤ","ㅤ"]
  },
  ghost: {
    weakness: ["ghost", "dark","ㅤ","ㅤ","ㅤ"],
    strength: ["psychic", "ghost","ㅤ","ㅤ","ㅤ"]
  },
  grass: {
    weakness: ["<:fire:1071549557525188629> Fire", "ice", "poison", "flying", "<:bug:1071554493247918221> Bug"],
    strength: ["<:water:1071554488109899776> Water", "ground", "rock","ㅤ","ㅤ"]
  },
  ice: {
    weakness: ["<:fire:1071549557525188629> Fire", "fighting", "rock", "steel","ㅤ"],
    strength: ["<:grass:1071554441083367545> Grass", "ground", "flying", "dragon","ㅤ"]
  },
  normal: {
    weakness: ["fighting","ㅤ","ㅤ","ㅤ","ㅤ"],
    strength: ["ㅤ","ㅤ","ㅤ","ㅤ","ㅤ"]
  },
  poison: {
    weakness: ["ground", "psychic","ㅤ","ㅤ","ㅤ"],
    strength: ["<:grass:1071554441083367545> Grass", "fairy","ㅤ","ㅤ","ㅤ"]
  },
  psychic: {
    weakness: ["<:bug:1071554493247918221> Bug", "ghost", "dark","ㅤ","ㅤ"],
    strength: ["fighting", "psychic","ㅤ","ㅤ","ㅤ"]
  },
  rock: {
    weakness: ["<:water:1071554488109899776> Water", "grass", "fighting", "ground","ㅤ"],
    strength: ["<:fire:1071549557525188629> Fire", "ice", "flying", "<:bug:1071554493247918221> Bug","ㅤ"]
  },
  steel: {
    weakness: ["<:fire:1071549557525188629> Fire", "Fighting", "ground","ㅤ","ㅤ"],
    strength: ["normal", "rock", "steel", "ice", "fairy"]
  },
  water: {
    weakness: ["electric", "<:grass:1071554441083367545> Grass","ㅤ","ㅤ","ㅤ"],
    strength: ["<:fire:1071549557525188629> Fire", "ground", "rock", "dragon","ㅤ"]
  },
  electric: {
    weakness: ["ground","ㅤ","ㅤ","ㅤ","ㅤ"],
    strength: ["<:water:1071554488109899776> Water", "flying","ㅤ","ㅤ","ㅤ"]
    },
  ground: {
    weakness: ["<:water:1071554488109899776> Water", "grass", "ice","ㅤ","ㅤ"],
    strength: ["electric", "<:fire:1071549557525188629> Fire", "poison", "rock", "steel"]
    },
  dark: {
    weakness: ["fighting", "<:bug:1071554493247918221> Bug", "fairy","ㅤ","ㅤ"],
    strength: ["psychic", "ghost","ㅤ","ㅤ","ㅤ"]
    }
};

//? DOUBLE TYPE weaknesses AND strength list

const typeWS2 = {
  "bug/flying": {
    weakness: ["rock", "electric", "fire"],
    strength: ["grass", "fighting", "ground"]
    },
    "dark/flying": {
    weakness: ["electric", "ice", "rock"],
    strength: ["ghost", "psychic", "dark"]
    },
    "dragon/flying": {
    weakness: ["ice", "rock"],
    strength: ["dragon", "grass", "fighting"]
    },
    "electric/flying": {
    weakness: ["ice", "rock"],
    strength: ["electric", "steel"]
    },
    "fairy/flying": {
    weakness: ["rock", "electric", "ice"],
    strength: ["dragon", "fighting", "<:bug:1071554493247918221>bug"]
    },
    "fighting/flying": {
    weakness: ["electric", "rock", "ice"],
    strength: ["grass", "fighting", "<:bug:1071554493247918221>bug"]
    },
    "fire/flying": {
    weakness: ["electric", "water", "rock"],
    strength: ["grass", "ice", "<:bug:1071554493247918221>bug"]
    },
    "ghost/flying": {
    weakness: ["electric", "rock"],
    strength: ["psychic", "ghost"]
    },
    "ground/flying": {
    weakness: ["ice", "grass"],
    strength: ["poison", "rock", "electric"]
    },
    "ice/flying": {
    weakness: ["rock", "electric"],
    strength: ["ice"]
    },
    "normal/flying": {
    weakness: ["rock", "electric"],
    strength: ["ground"]
    },
    "poison/flying": {
    weakness: ["electric", "rock"],
    strength: ["grass", "fighting"]
    },
    "psychic/flying": {
    weakness: ["electric", "ice", "rock"],
    strength: ["psychic", "grass"]
    },
    "rock/flying": {
    weakness: ["ice", "water"],
    strength: ["fighting", "<:bug:1071554493247918221>bug", "grass"]
    },
    "steel/flying": {
    weakness: ["electric", "ice"],
    strength: ["rock", "steel"]
    },
    "water/flying": {
    weakness: ["electric"],
    strength: ["water", "grass"]
    },
    "bug/grass": {
    weakness: ["fire", "flying", "rock"],
    strength: ["ground", "rock", "water"]
    },
    "bug/poison": {
    weakness: ["fire", "flying", "psychic"],
    strength: ["grass", "fighting", "poison"]
    },
    "dark/psychic": {
    weakness: ["<:bug:1071554493247918221>bug", "fairy", "fighting"],
    strength: ["dark", "ghost", "psychic"]
    },
    "dragon/grass": {
    weakness: ["dragon", "fire", "ice", "flying"],
    strength: ["electric", "grass", "water"]
    },
    "dragon/poison": {
    weakness: ["dragon", "psychic"],
    strength: ["fairy", "grass", "fighting"]
    },
    "electric/ground": {
    weakness: ["ground"],
    strength: ["electric", "flying", "steel"]
    },
};

export {typeWS, typeWS2}