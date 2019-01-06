const Discord = require("discord.js");

    module.exports.run = async(client, message, args) =>{


message.channel.send({ embed:{

 fields:[{
 name:"Gif:",
 value: " d!evil, d!hug or d!high space @user will display a gif"
      },
{
name:"Voice Chat:",
value:" when your in voice chat d!join, d!play with youtube url will play the song, however queue isn't working at the moment :(. d!leave has an issue of leaving the channel"
},
{
  name: "XP",
  value:"Each time you type into discord channel you will recivie xp, to check your level do !levels."
},
{
  name:"Prune",
  value:"d!prune out 100 will remove the last ammout of messages."
},
 {
   name:"Server Stats",
   value: "d!serverstats this will show the server stats"
 }
],

    }
      })
}





    module.exports.help = {

      name:"help"

    }
