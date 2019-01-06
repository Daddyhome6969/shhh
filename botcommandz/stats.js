const Discord = require("discord.js");

module.exports.run= async(client, message,args) =>{


message.channel.send({ embed:{
 Author:{
   name:message.guild.name,
   description:"The sever"
 },
 fields:[{
 name:"created on:",
 value: message.guild.createdAt
      },
{
name:"you joined:",
value:message.member.joinedAt
},
{
  name:"member count:",
  value: message.guild.memberCount
}
],

    }
      })
}

module.exports.help = {
  name: "serverstats"
}
