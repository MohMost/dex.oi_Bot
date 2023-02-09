const grass = '<:grass:1071554441083367545>'
const fire = '<:fire:1071549557525188629>'
const water = '<:water:1071554488109899776>'
const bug = '<:bug:1071554493247918221>'
const dark = '<:dark:1071554499434512504>'
const dragon = '<:dragon:1071554507655348326>'
const electric = '<:electric:1071554512076148736>'
const fairy = '<:fairy:1071554519026118677>'
const fighting = '<:fighting:1071554530354929684>'
const flying = '<:flying:1071554536046600294>'
const ghost = '<:ghost:1071554537644638268>'
const ground = '<:ground:1071554449484546159>'
const ice = '<:ice:1071554457357263018>'
const normal = '<:normal:1071554460700127295>'
const poison = '<:poison:1071554470418321419>'
const psychic = '<:psychic:1071554479406719016>'
const rock = '<:rock:1071554481990410310>'
const steel = '<:steel:1071554476388044897>'
//? SINGLE TYPE weaknesses AND strength list


const typeWS = {
  bug: {
    weakness: [`${fire} Fire`, `${flying} Flying`, `${rock} Rock`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${psychic} Psychic`, `${dark} Dark`,"ㅤ","ㅤ"]
  },
  dark: {
    weakness: [`${fighting} Fighting`, `${bug} Bug`, `${fairy} Fairy`,"ㅤ","ㅤ"],
    strength: [`${ghost} Ghost`, `${psychic} Psychic`, `${dark} Dark`,"ㅤ","ㅤ"]
    },
  dragon: {
    weakness: [`${ice} Ice`, `${dragon} Dragon`, `${fairy} Fairy`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fire} Fire`, `${water} Water`, `${electric} Electric`, `${grass} Grass`]
  },
  electric: {
    weakness: [`${ground} Ground`,"ㅤ","ㅤ","ㅤ","ㅤ"],
    strength: [`${water} Water`, `${flying} Flying`,"ㅤ","ㅤ","ㅤ"]
  },
  fairy: {
    weakness: [`${steel} Steel`, `${poison} Poison`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${fighting} Fighting`, `${dragon} Dragon`, `${dark} Dark`,"ㅤ","ㅤ"]
  },
  fighting: {
    weakness: [`${flying} Flying`, `${psychic} Psychic`, `${fairy} Fairy`,"ㅤ","ㅤ"],
    strength: [`${normal} Normal`, `${ice} Ice`, `${rock} Rock`, `${dark} Dark`, `${steel} Steel`]
  },
  fire: {
    weakness: [`${water} Water`, `${ground} Ground`, `${rock} Rock`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${ice} Ice`, `${bug} Bug`, `${steel} Steel`,"ㅤ"]
  },
  flying: {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ"]
  },
  ghost: {
    weakness: [`${dark} Dark`,"ㅤ","ㅤ","ㅤ","ㅤ"],
    strength: [`${ghost} Ghost`, `${psychic} Psychic`,"ㅤ","ㅤ","ㅤ"]
  },
  grass: {
    weakness: [`${fire} Fire`, `${ice} Ice`, `${poison} Poison`, `${flying} Flying`, `${bug} Bug`],
    strength: [`${water} Water`, `${ground} Ground`, `${rock} Rock`,"ㅤ","ㅤ"]
  },
  ground: {
    weakness: [`${water} Water`, `${grass} Grass`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${fire} Fire`, `${electric} Electric`, `${poison} Poison`, `${rock} Rock`, `${steel} Steel`]
  },
  ice: {
    weakness: [`${fire} Fire`, `${fighting} Fighting`, `${rock} Rock`, `${steel} Steel`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${ground} Ground`, `${dragon} Dragon`, `${flying} Flying`,"ㅤ"]
  },
  normal: {
    weakness: [`${fighting} Fighting`,"ㅤ","ㅤ","ㅤ","ㅤ"],
    strength: ["ㅤ","ㅤ","ㅤ","ㅤ","ㅤ"]
  },
  poison: {
    weakness: [`${ground} Ground`, `${psychic} Psychic`],
    strength: [`${grass} Grass`, `${fairy} Fairy`,"ㅤ","ㅤ","ㅤ"]
  },
  psychic: {
    weakness: [`${bug} Bug`, `${ghost} Ghost`, `${dark} Dark`],
    strength: [`${fighting} Fighting`, `${poison} Poison`,"ㅤ","ㅤ","ㅤ"]
  },
  rock: {
    weakness: [`${water} Water`, `${grass} Grass`, `${fighting} Fighting`, `${ground} Ground`, `${steel} Steel`],
    strength: [`${fire} Fire`, `${ice} Ice`, `${flying} Flying`, `${bug} Bug`,"ㅤ"]
  },
  steel: {
    weakness: [`${fire} Fire`, `${fighting} Fighting`, `${ground} Ground`],
    strength: [`${normal} Normal`, `${grass} Grass`, `${ice} Ice`, `${rock} Rock`, `${dragon} Dragon`, `${fairy} Fairy`]
  },
  water: {
    weakness: [`${grass} Grass`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${fire} Fire`, `${ground} Ground`, `${rock} Rock`,"ㅤ","ㅤ"]
  },
};

//? DOUBLE TYPE weaknesses AND strength list

const typeWS2 = {
  "bug/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`,"ㅤ","ㅤ","ㅤ"]
},
"dark/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${ghost} Ghost`, `${psychic} Psychicics`, `${dark} Dark`,"ㅤ","ㅤ"]
},
"dragon/flying": {
    weakness: [`${ice} Ice`, `${dragon} Dragon`, `${fairy} Fairy`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fire} Fire`, `${water} Water`,"ㅤ","ㅤ"]
},
"electric/flying": {
    weakness: [`${ice} Ice`, `${rock} Rock`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${electric} Electric`, `${steel} Steel`,"ㅤ","ㅤ","ㅤ"]
},
"fairy/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ"]
},
"fighting/flying": {
    weakness: [`${electric} Electric`, `${rock} Rock`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ"]
},
"fire/flying": {
    weakness: [`${electric} Electric`, `${water} Water`, `${rock} Rock`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${ice} Ice`, `${bug} Bug`,"ㅤ","ㅤ"]
},
"ghost/flying": {
    weakness: [`${electric} Electric`, `${rock} Rock`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${psychic} Psychicics`, `${ghost} Ghost`,"ㅤ","ㅤ","ㅤ"]
},
"ground/flying": {
    weakness: [`${ice} Ice`, `${grass} Grass`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${poison} Poison`, `${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ"]
},
"ice/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${ice} Ice`,"ㅤ","ㅤ","ㅤ","ㅤ"]
},
"normal/flying": {
  weakness: [`${rock} Rock`, `${electric} Electric`, "ㅤ", "ㅤ", "ㅤ"],
  strength: [`${ground} Ground`, "ㅤ", "ㅤ", "ㅤ", "ㅤ"]
},
"poison/flying": {
  weakness: [`${electric} Electric`, `${rock} Rock`, "ㅤ", "ㅤ", "ㅤ"],
  strength: [`${grass} Grass`, `${fighting} Fighting`, "ㅤ", "ㅤ", "ㅤ"]
},
"psychic/flying": {
  weakness: [`${electric} Electric`, `${ice} Ice`, `${rock} Rock`, "ㅤ", "ㅤ"],
  strength: [`${psychic} Psychicc`, `${grass} Grass`, "ㅤ", "ㅤ", "ㅤ"]
},
"rock/flying": {
  weakness: [`${ice} Ice`, `${water} Water`, "ㅤ", "ㅤ", "ㅤ"],
  strength: [`${fighting} Fighting`, `${bug} Bug`, `${grass} Grass`, "ㅤ", "ㅤ"]
},
"steel/flying": {
  weakness: [`${electric} Electric`, `${ice} Ice`, "ㅤ", "ㅤ", "ㅤ"],
  strength: [`${rock} Rock`, `${steel} Steel`, "ㅤ", "ㅤ", "ㅤ"]
},
"water/flying": {
  weakness: [`${electric} Electric`, "ㅤ", "ㅤ", "ㅤ", "ㅤ"],
  strength: [`${water} Water`, `${grass} Grass`, "ㅤ", "ㅤ", "ㅤ"]
},
"bug/grass": {
  weakness: [`${fire} Fire`, `${flying} Flying`, `${rock} Rock`, "ㅤ", "ㅤ"],
  strength: [`${ground} Ground`, `${rock} Rock`, `${water} Water`, "ㅤ", "ㅤ"]
},
"bug/poison": {
  weakness: [`${fire} Fire`, `${flying} Flying`, `${psychic} Psychicc`, "ㅤ", "ㅤ"],
  strength: [`${grass} Grass`, `${fighting} Fighting`, `${poison} Poison`, "ㅤ", "ㅤ"]
},
"dark/psychic": {
  weakness: [`${bug} Bug`, `${fairy} Fairy`, `${fighting} Fighting`, "ㅤ", "ㅤ"],
  strength: [`${dark} Dark`, `${ghost} Ghost`, `${psychic} Psychic`, "ㅤ", "ㅤ"]
},
"dragon/grass": {
  weakness: [`${dragon} Dragon`, `${fire} Fire`, `${ice} Ice`, `${flying} Flying`, "ㅤ"],
  strength: [`${electric} Electric`, `${grass} Grass`, `${water} Water`, "ㅤ", "ㅤ"]
},
"dragon/poison": {
  weakness: [`${dragon} Dragon`, `${psychic} Psychic`,"ㅤ","ㅤ","ㅤ"],
  strength: [`${fairy} Fairy`, `${grass} Grass`, `${fighting} Fighting`,"ㅤ","ㅤ"]
  },
  "electric/ground": {
  weakness: [`${ground} Ground`,"ㅤ","ㅤ","ㅤ","ㅤ"],
  strength: [`${electric} Electric`, `${flying} Flying`, `${steel} Steel`,"ㅤ","ㅤ"]
  },
  "grass/poison": {
    weakness: [`${fire} Fire`, `${ice} Ice`, `${psychic} Psychicc`, `${flying} Flying`, `${bug} Bug`],
    strength: [`${water} Water`, `${ground} Ground`, `${rock} Rock`,"ㅤ","ㅤ"]
  },  
  "steel/ground": {
    weakness: [`${ground} Ground`, `${fighting} Fighting`, `${fire} Fire`,`${water} Water` ,"ㅤ"],
    strength: [`${fire} Fire`, `${electric} Electric`, `${steel} Steel`, `${poison} Poison`, `${rock} Rock`]
  },
  "ice/ghost": {
    weakness: [`${fighting} Fighting`, `${fire} Fire`, `${rock} Rock`, `${steel} Steel`,"ㅤ"],
    strength:[`${ice} Ice`, `${ghost} Ghost`,"ㅤ","ㅤ","ㅤ"]
  },
  "dark/dragon": {
    weakness:[`${fairy} Fairy`, `${dragon} Dragon`, `${fighting} Fighting`,"ㅤ","ㅤ"],
    strength:[`${dark} Dark`, `${dragon} Dragon`,"ㅤ","ㅤ","ㅤ"]
  },
  "steel/fighting":{
    weakness: [`${fire} Fire`, `${fighting} Fighting`, `${ground} Ground`,"ㅤ","ㅤ"],
    strength: [`${ice} Ice`, `${rock} Rock`, `${dragon} Dragon`, `${steel} Steel`,"ㅤ"]
  },
  "dragon/psychic": {
    weakness: [`${fairy} Fairy`, `${dragon} Dragon`, `${ice} Ice`, `${psychic} Psychic`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${psychic} Psychic`,"ㅤ","ㅤ","ㅤ"]
  }
  
};

export {typeWS, typeWS2}

/*



Normal/Fighting
Fire/Fighting
Water/Fighting
Grass/Fighting
Electric/Fighting
Ground/Fighting
Rock/Fighting
Bug/Fighting
Dragon/Fighting
Ice/Fighting
Ghost/Fighting
Dark/Fighting
Steel/Fighting
Normal/Poison
Fire/Poison
Water/Poison
Grass/Poison
Fighting/Poison
Electric/Poison
Ground/Poison
Rock/Poison
Bug/Poison
Dragon/Poison
Ice/Poison
Ghost/Poison
Normal/Ghost
Normal/Steel
Normal/Rock
Normal/Ice
Normal/Bug
Fire/Steel
Fire/Rock
Fire/Ice
Water/Steel
Water/Rock
Water/Ice
Grass/Steel
Grass/Rock
Grass/Ice
Fighting/Steel
Fighting/Rock
Fighting/Ice
Electric/Steel
Electric/Rock
Electric/Ice
Ground/Steel
Ground/Rock
Ground/Ice
Rock/Steel
Rock/Ice
Bug/Steel
Bug/Rock
Bug/Ice
Dragon/Steel
Dragon/Rock
Dragon/Ice
Ice/Ghost
Dark/Steel
Dark/Rock

"bug/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`,"ㅤ","ㅤ","ㅤ"]
  },
  "dark/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${ghost} Ghost`, `${psychic} Psychicics`, `${dark} Dark`,"ㅤ","ㅤ"]
  },
  "dragon/flying": {
    weakness: [`${ice} Ice`, `${dragon} Dragon`, `${fairy} Fairy`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fire} Fire`, `${water} Water`,"ㅤ","ㅤ"]
  },
  "electric/flying": {
    weakness: [`${ice} Ice`, `${rock} Rock`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${electric} Electric`, `${steel} Steel`,"ㅤ","ㅤ","ㅤ"]
  },
  "fairy/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ"]
  },
  "fighting/flying": {
    weakness: [`${electric} Electric`, `${rock} Rock`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ"]
  },
  "fire/flying": {
    weakness: [`${electric} Electric`, `${water} Water`, `${rock} Rock`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${ice} Ice`, `${bug} Bug`,"ㅤ","ㅤ"]
  },
  "ghost/flying": {
    weakness: [`${electric} Electric`, `${rock} Rock`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${psychic} Psychics`, `${ghost} Ghost`,"ㅤ","ㅤ","ㅤ"]
  },
  "ground/flying": {
    weakness: [`${ice} Ice`, `${grass} Grass`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${poison} Poison`, `${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ"]
  },
  "ice/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${ice} Ice`,"ㅤ","ㅤ","ㅤ","ㅤ"]
  },
  "bug/grass": {
  weakness: [`${fire} Fire`, `${ice} Ice`, `${flying} Flying`, `${rock} Rock`,"ㅤ","ㅤ"],
  strength: [`${grass} Grass`, `${fighting} Fighting`, `${ground} Ground`, `${psychic} Psychicics`,"ㅤ","ㅤ"]
},
"dark/grass": {
  weakness: [`${fire} Fire`, `${ice} Ice`, `${psychic} Psychicics`, `${flying} Flying`, `${dark} Dark`,"ㅤ"],
  strength: [`${grass} Grass`, `${ground} Ground`, `${psychic} Psychics`, `${ghost} Ghost`,"ㅤ","ㅤ"]
},
"dragon/grass": {
  weakness: [`${ice} Ice`, `${fire} Fire`, `${poison} Poison`, `${flying} Flying`,"ㅤ","ㅤ"],
  strength: [`${grass} Grass`, `${water} Water`, `${dragon} Dragon`,"ㅤ","ㅤ","ㅤ"]
},
"electric/grass": {
  weakness: [`${ground} Ground`,"ㅤ","ㅤ","ㅤ","ㅤ"],
  strength: [`${water} Water`, `${grass} Grass`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"]
},
"fairy/grass": {
  weakness: [`${fire} Fire`, `${ice} Ice`, `${poison} Poison`, `${flying} Flying`,"ㅤ","ㅤ"],
  strength: [`${grass} Grass`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ","ㅤ"]
},
"fighting/grass": {
  weakness: [`${psychic} Psychics`, `${flying} Flying`, `${fairy} Fairy`,"ㅤ","ㅤ"],
  strength: [`${grass} Grass`, `${normal} Normal`, `${rock} Rock`, `${dark} Dark`,"ㅤ","ㅤ"]
},
"fire/grass": {
  weakness: [`${water} Water`, `${ground} Ground`, `${rock} Rock`,"ㅤ","ㅤ"],
  strength: [`${grass} Grass`, `${ice} Ice`, `${bug} Bug`, `${steel} Steel`,"ㅤ","ㅤ"]
},
"ghost/grass": {
  weakness: [`${dark} Dark`,"ㅤ","ㅤ","ㅤ","ㅤ"],
  strength: [`${grass} Grass`, `${psychic} Psychics`, `${ghost} Ghost`,"ㅤ","ㅤ","ㅤ"]
},
"ground/grass": {
  weakness: [`${water} Water`, `${grass} Grass`, `${ice} Ice`,"ㅤ","ㅤ"],
  strength: [`${poison} Poison`, `${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"]
},







const data = {
  "bug/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`,"ㅤ","ㅤ","ㅤ"]
  },
  "dark/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${ghost} Ghost`, `${psychic} Psychics`, `${dark} Dark`,"ㅤ","ㅤ"]
  },
  "dragon/flying": {
    weakness: [`${ice} Ice`, `${dragon} Dragon`, `${fairy} Fairy`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fire} Fire`, `${water} Water`,"ㅤ","ㅤ"]
  },
  "electric/flying": {
    weakness: [`${ice} Ice`, `${rock} Rock`,"ㅤ","ㅤ","ㅤ"],
    strength: [`${electric} Electric`, `${steel} Steel`,"ㅤ","ㅤ","ㅤ"]
  },
  "fairy/flying": {
    weakness: [`${rock} Rock`, `${electric} Electric`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${dragon} Dragon`, `${fighting} Fighting`, `${bug} Bug`,"ㅤ","ㅤ"]
  },
  "fighting/flying": {
    weakness: [`${electric} Electric`, `${rock} Rock`, `${ice} Ice`,"ㅤ","ㅤ"],
    strength: [`${grass} Grass`, `${fighting} Fighting`, `${bug}
  }
  "poison/flying": {
    weakness: ["Rock", "Electric", "ㅤ", "ㅤ", "ㅤ"],
    strength: ["Grass", "Fighting", "ㅤ", "ㅤ", "ㅤ"]
  },
  "electric/flying": {
    weakness: ["Ice", "Rock", "ㅤ", "ㅤ", "ㅤ"],
    strength: ["Electric", "Steel", "ㅤ", "ㅤ", "ㅤ"]
  },
  "ground/flying": {
    weakness: ["Ice", "Grass", "ㅤ", "ㅤ", "ㅤ"],
    strength: ["Poison", "Rock", "Electric", "ㅤ", "ㅤ"]
  },
  "rock/flying": {
    weakness: ["Water", "Electric", "ㅤ", "ㅤ", "ㅤ"],
    strength: ["Normal", "Fire", "Poison", "Flying", "ㅤ", "ㅤ"]
  },
  "bug/flying": {
    weakness: ["Rock", "Electric", "Fire", "ㅤ", "ㅤ"],
    strength: ["Grass", "Psychic", "Dark", "ㅤ", "ㅤ"]
  }

*/