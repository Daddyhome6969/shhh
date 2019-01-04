const Discord = require("discord.js");

module.exports.run= async(client, message,args) =>{
let serverstates = new Discord.RichEmbed()
.setDescription("server")
.addField("server name", message.guild.name)
.addField("created on", message.guild.createdAt)
.addField("you joined", message.member.joinedAt)
.addField("totla members", message.guild.memberCount);

message.channel.send(serverstates);
}

module.exports.help = {
  name: "serverstats"
}
