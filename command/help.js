const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  let command = new Discord.RichEmbed()
  .setAuthor(`Aurellia`, client.user.avatarURL)
  .setColor("#ff8ff0")
  .addField(`**➡️ Music**`, `\`a!play\`, \`a!search\`, \`a!stop\`, \`a!pause\`, \`a!skip\`, \`a!resume\`, \`a!nowplaying\`, \`a!queue\``)
  .addField(`**➡️ Moderation**`, `\`Kick\``)
  .addField(`**➡️ Fun**`, `\`Neko Picture\``)
  .addField(`**➡️ Support Server**`, `[\`KLIK DISINI\`](https://discord.gg/zCetBAK)`)
  .setThumbnail(client.user.displayAvatarURL)
  .setFooter("©️ ItsNeko", "https://cdn.discordapp.com/attachments/697750878131847183/721973064098906172/307500367041201.jpg");
  
  message.channel.send(command)
  
}
