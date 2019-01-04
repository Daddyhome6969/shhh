const Discord = require ("discord.js");

     module.exports.run = async(client, message, args) =>{

let gif = require('./gifs/stuff.json');
   if(   message.channel.send )
   {
       let mUser = message.mentions.users.first();
           let pics = (gif.cuddle)
           let timage = pics[Math.floor(Math.random() * pics.length)];
        //   console.log((`${timage} work`));
           message.channel.send(timage);
   }
 }
     module.exports.help = {

       name:"hug"

     }
