const Discord = require ("discord.js");
const commando = require ("discord.js-commando");

     module.exports.run = async(client, message, args) =>{

// making sure that no one who hasnt got the admins role  can prune


if ( message.guild.roles.find('name', 'ADMINS'))
{
  message.channel.send("you need to be admin role to prune");
  return; //this return will ensure the rest dont run
}

//pruce was only used for remove all my test commands.
    if(!args[0])
    {
      //if just d!prune then this user gets dmed saying no.
      message.delete();
      message.author.send("please pick a number from 0 - 100");
      return;
    }
    // if its greater than 0 doing this code.
    // found out the max is 100.
   if(args[0] > 100)
   {

     message.delete();
     message.author.send("max is 100 ");
     return;
   }


   //once the checks are done it will pruce chat.
   //also deletes the d!prunce 4 message.
   message.delete();
   message.channel.bulkDelete(args[0]);

   var t = process.hrtime();
   // [ 1800216, 927643717 ]

   setTimeout(function () {
     t = process.hrtime(t);
     // [ 1, 6962306 ]

     console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
     // benchmark took 1 seconds and 6962306 nanoseconds
   }, 1000);


}
     module.exports.help = {

       name:"prune"

     }
