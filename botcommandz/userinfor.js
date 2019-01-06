 const Discord = require ("discord.js");

      module.exports.run = async(client, message, args) =>{



     message.channel.send({embed : {
      color: 3447003,
      author: {
      name:message.author.username,
      icon_url: message.author.avatarURL
    },

    //description:  message.author.roles.map(role => role.name),
    fields: [{
      name:"User joined ",
      value:message.member.joinedAt
     }
          ],
          timestamp: new Date(),
          footer:{
            icon_url: message.author.avatarURL,

          }
        }     

      });

  }
      module.exports.help = {

        name:"userin"

      }
