 const Discord = require ("discord.js");

      module.exports.run = async(client, message, args) =>{



     message.channel.send({embed : {
      color: 3447003,
      author: {
      name:message.author.username,
      icon_url: message.author.avatarURL
    },
    title: "title of the user",
    //description:  message.author.roles.map(role => role.name),
    fields: [{
      name:"Fields",
      value:"you can do "
     },
          ],
          timestamp: new Date(),
          footer:{
            icon_url: message.author.avatarURL,
            text:"example"
          }
  }

      });

  }
      module.exports.help = {

        name:"userin"

      }
