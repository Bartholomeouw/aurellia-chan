const { RichEmbed } = require("discord.js");
const { get } = require('superagent')

exports.run = async (client, message, args, extend) => {
  let { body } = await get(`https://nekos.life/api/neko`);
  let embed = new RichEmbed()
  .setColor("#ff8ff0")
  .setAuthor("Kawai Neko! -w-")
  .setImage(body.neko)
  return message.channel.send(embed)
}

exports.help = {
  name: "neko"
}
