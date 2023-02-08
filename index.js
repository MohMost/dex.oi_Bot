import { config } from "dotenv";
import Canvas from "canvas";
import * as discord from "discord.js";
import { main } from "./commands/commandBuilder.js";
import { typeMap } from "./data/icons.js";
import { typeWS } from "./data/stren_weak.js";
import { InteractionResponseType } from "discord.js";

config();

const BOT_TOKEN = process.env.BOT_TOKEN;

const client = new discord.Client({
  intents: [
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent
  ]
});
const base = `https://pokeapi.co/api/v2/pokemon/`;
const base2 = `https://pokeapi.co/api/v2/pokemon-species/`;

function start() {
  client.login(BOT_TOKEN);
  console.log(`DEX.IO is successfully logged ┃✅`)
  
}
start();
client.on("interactionCreate", (interaction) => {
  try {
    if (interaction.isChatInputCommand()) {
      const pokename = interaction.options.getString("name").toLowerCase();
      const getpokemon = async () => {
        const newbase = base + pokename;
        const newbase2 = base2 + pokename;
        const pokemonData = await fetch(newbase);
        const pokemonData2 = await fetch(newbase2);
        const pokemon = await pokemonData.json();
        const pokemon2 = await pokemonData2.json();

        botreply(pokemon, pokemon2);
      };

      getpokemon(pokename)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          if (error.message.includes("404")) {
            interaction.reply({
              content: `${interaction.user} OOPS❗please make sure you have spelled your prompt correctly`
            });
          }
        });

      function botreply(pokemon, pokemon2) {
        const name = pokemon.name;
        let color = "";
        let iconID = "";
        let iconID2 = "";
        let type = "";
        let type2 = "";
        let bar = "";
        let spacing = "ㅤㅤ";
        let flavor_text = "";
        if (pokemon.types.length === 2) {
          type = pokemon.types[0].type.name;
          type2 = pokemon.types[1].type.name;
        } else {
          type = `${pokemon.types[0].type.name}`;
          type2 = "ㅤ";
          spacing = "ㅤㅤㅤㅤㅤㅤㅤㅤ";
        }
        let arr = Array.from(pokemon2.flavor_text_entries[0].flavor_text)
        arr.filter((letter)=> letter === "W").forEach(letter => console.log(letter))
        console.log(arr)
        const typeData = typeMap[type.toLowerCase()] || {};
        iconID = typeData.iconID || "";
        color = typeData.color || "";
        bar = typeData.bar || "";

        const typeData2 = typeMap[type2.toLowerCase()] || {};
        iconID2 = typeData2.iconID || "";
        
        
        try{
        interaction.reply({
          content: `${interaction.user}`,
          embeds: [
            new discord.EmbedBuilder()
              .setColor(color)
              .setTitle(`${name.charAt(0).toUpperCase() + name.slice(1)}`)
              .setURL(
                `https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`
              )
              .setDescription(`${pokemon2.flavor_text_entries[0].flavor_text}`)
              .setImage(
                `${pokemon.sprites.other["official-artwork"].front_default}`
              )
              .addFields(
                {
                  name: "ㅤ",
                  value: `${spacing}${iconID} **${type}**`,
                  inline: true
                },
                {
                  name: "ㅤ",
                  value: `ㅤㅤ${iconID2} **${type2}**`,
                  inline: true
                }
              )
              .setFooter({ text: `#${pokemon.id}` })
          ],
          components: [
            {
              type: 1,
              components: [
                {
                  type: 2,
                  style: 2,
                  label: "📊 Stats",
                  custom_id: "statistics"
                },
                {
                  type: 2,
                  style: 2,
                  label: "⚡️ Evolutions",
                  custom_id: "evolutions"
                },
                {
                  type: 2,
                  style: 2,
                  label: "👍 Strengths/👎 Weaknesses",
                  custom_id: "sw"
                }
              ]
            }
          ]
        })
        
        }catch(err) {
          console.log(`this is the error ${interaction.message}`)

        }
      }
      return;
    } else if (interaction.isButton()) {
      const custom_id = interaction.component.customId;
      const title = interaction.message.embeds[0].data.title;
      
      fetch(
        `https://pokeapi.co/api/v2/pokemon/${title.toLocaleLowerCase()}`
      )
        .then((response) => response.json())
        .then((data) => {
          
          const type = data.types[0].type.name;
          const typeData = typeMap[type.toLowerCase()] || {};
          let color = typeData.color || "";
          let iconID = typeData.iconID || "";
          switch (custom_id) {
            case "statistics":
              interaction.reply({
                embeds: [
                  new discord.EmbedBuilder()
                    .setColor(color)
                    .setTitle(`${title}'s stats`)
                    .setDescription("ㅤ")
                    .addFields(
                      {
                        name: "HP",
                        value: `${data.stats[0].base_stat}\n\ㅤ`,
                        inline: true
                      },
                      {
                        name: "ATK",
                        value: `${data.stats[1].base_stat}\n\ㅤ`,
                        inline: true
                      },
                      {
                        name: "DEF",
                        value: `${data.stats[2].base_stat}\n\ㅤ`,
                        inline: true
                      },
                      {
                        name: "SP.ATK",
                        value: `${data.stats[3].base_stat}\n\ㅤ`,
                        inline: true
                      },
                      {
                        name: "SP.DEF",
                        value: `${data.stats[4].base_stat}\n\ㅤ`,
                        inline: true
                      },
                      {
                        name: "SPD",
                        value: `${data.stats[5].base_stat}\n\ㅤ`,
                        inline: true
                      }
                    )
                ]
              });

              break;
            case "evolutions":
              fetch(`https://pokeapi.co/api/v2/evolution-chain/${data.id}`)
              .then(response => response.json()).then(data => {
                interaction.reply({content: `${data.chain.species.name}`})
              }).catch(err => console.log("evolustion",err));
              break;
            case "sw":
              let strengths;
              let weaknesses;

              if (data.types.length === 2) {
                let affinData = typeWS2[type.toLowerCase()] || {};
                strengths = affinData.color || "";
                weaknesses = affinData.color || "";
              } else {
                let affinData = typeWS[type.toLowerCase()] || {};
                strengths = affinData.strength || "";
                weaknesses = affinData.weakness || "";
              }
              
              interaction.reply({
                content: `**${title} | ${data.generation} | strengths and weaknesses** ${interaction.user}`,
                embeds: [
                  new discord.EmbedBuilder().setColor(color).setFields(
                    {
                      name: "ㅤ",
                      value: `<:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643> **Strengths** <:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643>\n\ㅤ`,
                      inline: false
                    },
                    {
                      name: `${strengths[0]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${strengths[1]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${strengths[2]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${strengths[3]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${strengths[4]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: "ㅤ",
                      value: `<:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643> **Weaknesses** <:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643><:grass2:1071586457174679643>\n\ㅤ`,
                      inline: false
                    },
                    {
                      name: `${weaknesses[0]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${weaknesses[1]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${weaknesses[2]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${weaknesses[3]}`,
                      value: "ㅤ",
                      inline: true
                    },
                    {
                      name: `${weaknesses[4]}`,
                      value: "ㅤ",
                      inline: true
                    }
                  )
                ]
              });
              break;
            default:
              console.log("Unknown");
              break;
          }
        })
        .catch((error) =>
          console.log(
            `OOPs!!⚠️ this is the error comming from fetching data in the buttons interaction ⚠️ : ${error}`
          )
        );
    }
  } catch (e) {
    console.log(e);
    console.log(discord.Client.captureRejections);
  }
});
main();
