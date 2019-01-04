const Discord = require("discord.js");
const xp = require("../xp.json");

    module.exports.run = async(client, message, args) =>{
  if(!xp[message.author.id])
  {
    xp[message.author.id] = {
      xp : 0,
      level:0
    };
  }
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlxp = curlvl *300;
  let difference = nxtLvlxp - curxp;








 const embed = new Discord.RichEmbed()

.setAuthor(message.author.username)
.addField("level", curlvl, true)
.addField("XP", curxp, true)
.setFooter(`${difference} XP till level up`);
message.channel.send(embed);
    }


    module.exports.help = {

      name:"levels"

    }
