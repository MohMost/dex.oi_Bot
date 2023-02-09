import * as discord from "discord.js";
import { config } from "dotenv";
config();
const rest = new discord.REST({ version: "10" }).setToken(process.env.BOT_TOKEN);
const CLIENT_ID = process.env.CLIENT_ID
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
    console.log(' Started refreshing application (/) commands ┃✅')
    await rest.put(discord.Routes.applicationCommands(CLIENT_ID), {

       body: commands 

      });
  }catch(err){
    if(!err.message.includes('rest is not defined')){
      console.log(`error in  :${err}`)
    }
    
  }
}

export {main}