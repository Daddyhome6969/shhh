const Discord = require("discord.js");
//this is getting the xp.json file.
const xp = require("../xp.json");

    module.exports.run = async(client, message, args) =>{
      //if sp dosent exist then create the user.
  if(!xp[message.author.id])
  {
    xp[message.author.id] = {
      xp : 0,
      level:0
    };
  }
  let currentxp = xp[message.author.id].xp;
  let currentlvl = xp[message.author.id].level;
  let nextlevelxp = currentlvl *900;


// embed manually not using RichEmbed
 message.channel.send({embed:
{
   author:{
     name:message.author.username

   },
   fields: [{
     name: "current level ",
     value:  xp[message.author.id].level
   },
   {
     name: "Current Xp",
     value:  xp[message.author.id].xp
   }],
footer:{
  text:"copyright"
    }
      }
        });
              }


    module.exports.help = {

      name:"levels"

    }
