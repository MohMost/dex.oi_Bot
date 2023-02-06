import {config} from 'dotenv'
import { REST } from '@discordjs/rest'
import { SlashCommandBuilder} from '@discordjs/builders'
import Canvas from"canvas"
import { 
  Client, GatewayIntentBits, 
  EmbedBuilder, 
  userMention, 
  Routes, 
  Integration
} from 'discord.js'

config()

const BOT_TOKEN = process.env.BOT_TOKEN
const CLIENT_ID = process.env.CLIENT_ID 
const GUILD_ID = process.env.GUILD_ID
const rest = new REST ({version: '10'}).setToken(BOT_TOKEN)


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
})

const typeMap = {
  grass: {
    iconID: '<:grass:1071554441083367545>',
    color: '#b1f1a0',
    bar: '<:grass2:1071586457174679643>'
  },
  fire: {
    iconID: '<:fire:1071549557525188629>',
    color: '#ff6d4d'
  },
  water: {
    iconID: '<:water:1071554488109899776>',
    color: '#add3ff'
  },
  bug: {
    iconID: '<:bug:1071554493247918221>',
    color: '#f5ffa0'
  },
  dark: {
    iconID: '<:dark:1071554499434512504>',
    color: '#d49188'
  },
  dragon: {
    iconID: '<:dragon:1071554507655348326>',
    color: '#959fff',
    bar: '<:dragon2:1071580162602324059>'
  },
  electric: {
    iconID: '<:electric:1071554512076148736>',
    color: '#ffe592'
  },
  fairy: {
    iconID: '<:fairy:1071554519026118677>',
    color: '#feb5ff'
  },
  fighting: {
    iconID: '<:fighting:1071554530354929684>',
    color: '#ffcfa0'
  },
  flying: {
    iconID: '<:flying:1071554536046600294>',
    color: '#95cbff'
  },
  ghost: {
    iconID: '<:ghost:1071554537644638268>',
    color: '#d68fd7'
  },
  ground: {
    iconID: '<:ground:1071554449484546159>',
    color: '#d59567'
  },
  ice: {
    iconID: '<:ice:1071554457357263018>',
    color: '#caf4ff'
  },
  normal: {
    iconID: '<:normal:1071554460700127295>',
    color: '#bdbdbd'
  },
  poison: {
    iconID: '<:poison:1071554470418321419>',
    color: '#ce9cf5'
  },
  psychic: {
    iconID: '<:psychic:1071554471414233016>',
    color: '#ff9bff'
  },
  rock: {
    iconID: '<:rock:1071554473123811383>',
    color: '#d9b373'
  },
  steel: {
    iconID: '<:steel:1071554476388044897>',
    color: '#b8b8d6'
  },
}

client.on('interactionCreate', (interaction) =>{
    try{ 
    if (interaction.isChatInputCommand()){
      const pokename =interaction.options.getString('name').toLowerCase()
      const getpokemon = async (pokename) => {
        const base = `https://pokeapi.co/api/v2/pokemon/${pokename}`
        const base2 = `https://pokeapi.co/api/v2/pokemon-species/${pokename}`
        const pokemonData = await fetch(base);
        const pokemonData2 = await fetch(base2);
        const pokemon = await pokemonData.json();
        const pokemon2 = await pokemonData2.json();
        botreply(pokemon, pokemon2)
      }
      getpokemon(pokename).then(response=> {
        return response;
      }).catch(error => {
          interaction.reply({content:`${interaction.user} OOPS❗please make sure you have spelled your prompt correctly`})
          console.error(error)
      });
      function botreply(pokemon, pokemon2) {
        
        const name = pokemon.name
        let color = ''
        let iconID = ''
        let iconID2 = ''
        let type =''
        let type2 =''
        let bar = ''
        let spacing= 'ㅤㅤ'
    
        if (pokemon.types.length === 2) {
          type = pokemon.types[0].type.name;
          type2 = pokemon.types[1].type.name;
        } else {
          type = `${pokemon.types[0].type.name}`;
          type2 = "ㅤ";
          spacing = "ㅤㅤㅤㅤㅤㅤㅤㅤ";
        }
    
        const typeData = typeMap[type.toLowerCase()] || {};
        iconID = typeData.iconID || "";
        color = typeData.color || "";
        bar = typeData.bar || "";
    
        const typeData2 = typeMap[type2.toLowerCase()] || {};
        iconID2 = typeData2.iconID || "";
      
        interaction.reply({content: `${interaction.user}`,
          embeds: [new EmbedBuilder()
            .setColor(color)
            .setTitle(`ㅤㅤㅤㅤ${bar}${bar}${bar} ${name.charAt(0).toUpperCase() + name.slice(1)} ${bar}${bar}${bar}`)
            .setURL(`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`)
            .setDescription(`${pokemon2.flavor_text_entries[0].flavor_text}`)
            .setImage(`${pokemon.sprites.other["official-artwork"].front_default}`)
            .addFields(
              { name: "ㅤ", value: `${spacing}${iconID} **${type}**`, inline: true },
              { name: "ㅤ", value: `ㅤㅤ${iconID2} **${type2}**`, inline: true },
            )
            .setFooter({ text: `#${pokemon.id}`})
          ],
        })
        return
      } 
      
    
  }
 } catch (err) {
  console.log(`THIS IS THE ERROR : ${err}`)
}
})

async function main() {
  const commands = [
    {
      name: 'pokemon',
      description: 'type the name or the index',
      options:[
        {
          name: 'name',
          description: 'the name',
          type: 3,
          required: true,
        }
    ] 
    }
  ]
  try{
    console.log('Started refreshing application (/) commands.')
    await rest.put(Routes.applicationCommands(CLIENT_ID, GUILD_ID), {

       body: commands 

      });
      
  }catch(err){
    console.log(`here is the error :${err}`)
  }
}
main()
client.login(BOT_TOKEN)