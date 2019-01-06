const Discord = require ("discord.js");


module.exports.run = async (client, message, args) => {
  //if bot is in the voice channel.
  if (message.guild.voiceChannel)
  {
    message.guild.voiceConnection.disconnect()
  }
   else {
     message.channel.send("i must be in the channel to leave")
   }


}

module.exports.help = {
    name: "kick"
}
