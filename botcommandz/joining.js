const Discord = require ("discord.js");
//const commando = require("discord.js-commando");



module.exports.run = async (client, message, args) => {
  // if memeber is voiceChannel then do this statement.
  if (message.member.voiceChannel)
  {
    //if bot isnt in voice chat then do this.
    if(!message.guild.voiceChannel)
    {
      //the bot will join if they aint in here.

      message.member.voiceChannel.join()
      .then(connected => {
        message.reply("I have joined")
      })
    }
  }
  //if the user not in voicechat do this.
  else {
    message.reply("you need to be in  a voice channel")
  }
}

module.exports.help = {
    name: "join"
}
