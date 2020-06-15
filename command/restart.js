const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async (client, message, args) => {
 
  if(message.author.id !== '322750906284376064') return message.channel.send('Kamu Bukan Owner!!');
  
  message.channel.send(`Berhasil Di Restart!`).then(() =>{
    process.exit(1);
    
  })
  
}
