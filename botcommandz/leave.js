const Discord = require ("discord.js");
const commando = require ('discord.js-commando');


module.exports.run = async(client, message, args) =>{
      if(message.member.voiceConnection)
      {
        message.guild.voiceConnection.leave();
      }
  else
  {
    message.reply("need to be in a voice channel to leave");
  }
 }
     module.exports.help = {

       name:"stop"

     }
