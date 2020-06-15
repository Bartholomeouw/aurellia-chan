const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();

client.on('ready', () => {
  console.log('Bots sudah on!');
        let statuses = [
        `a!help | ItsNeko! -w-`,
        "Love You All!!! (っ◔◡◔)っ",
        `Exposed Waifu Indonesia`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "PLAYING"});

    }, 4000)

  });

const prefix = 'a!'

client.on('message', async message => {
  
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let {cooldown} = require("./cooldown.js")
  let commandcooldown = cooldown;
  
  if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
    
  if(!msg.startsWith(prefix)) return;
  if(commandcooldown.has(message.author.id)) {
    
return message.channel.send('Hai gunakan bot kembali dalam waktu 2 detik').then(msg => msg.delete(2000));
    
  }
  commandcooldown.add(message.author.id);
  setTimeout(() => {
    commandcooldown.delete(message.author.id);
  }, 2000);
  
  try {
    let commandFile = require(`./command/${cmd}`);
    commandFile.run(client, message, args);
  } catch(e) {
    
  } finally {
    console.log(`${message.author.username} menggunakan command: ${cmd}`);
    
  }
  
 });

client.login(process.env.TOKEN);
