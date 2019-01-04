
//config file for JSON, this will get the prefix and the token from the discord.api
const botconfig = require("./config.json");
//this is the  discord.js libary
const Discord = require ("discord.js");


// from the discord.js libary.
const client = new Discord.Client;
client.commands = new Discord.Collection();
//fs is for the file system to read them.

const fs = require("fs");

//commando framework for discord.js

const commando = require("discord.js-commando");
//this is used for the bot playing music.
 global.servers = {};


//map for the queue for the songs.
 const queue = new Map();




//reading all the files in the folder
//if theres any errors this will console.error if any appear.
fs.readdir("./botcommandz/",(err, files) =>{
  if(err) console.error(err);
  //filter will look through all the files and be true. pop will take the last part of the array.
let jsfile = files.filter(f => f.split(".").pop() === "js")
 if(jsfile.length <= 0)
 {
   console.log("nothing to load");

 }
  console.log(`loading ${jsfile} commands`);
//Foreach loop was more better than using the basic for loop.
  jsfile.forEach((f,i) =>  {
  let props = require(`./botcommandz/${f}`);
//this will load all the files in botcommandz and print this into the console.log.
  console.log(`${i+1}: ${f} Loaded`);
  //help.name will allow me to call the command
 client.commands.set(props.help.name, props);
});


});
//When bot online it will, print to the console log that  its online.
//the setActivity is what is doing e.g. coding
client.on("ready", async () =>
{
  //When the bot is online, Can set the game its playing.
  console.log(`${client.user.username} is online!` );
   client.user.setActivity("Coding ");
   console.log(client.commands);

});




 //let xp = require('./usersxp.json');
let xp = require('./xp.json');
let coins = require('./coins.json');



client.on("message",async message =>
{
  if(message.author.bot) return;


//this is using the set prefix that I made in the congif.json.
  let prefix = botconfig.prefix;

//messageArray will use the message.content.split.
   let messageArray = message.content.split(" ");

let cmd = messageArray[0];
//args is an arugment .
let args =  messageArray.slice(1);



  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

//retuns the first message in the array e.g. Hello as this is the first in the array.

/* coming back to this.....

      if(message.content.startsWith( `${prefix}mute`))
      {

        //checking permission if the users have mange users checked.
        //if(!message.memeber.hasPermission('MANAGE_MESSAGES')) return message.channel.sendMessage("you dont permission.");

                //Get the meminted user and mute them.
        //first(); means this.
        let toMute = message.guild.memeber(message.mentions.users.first());
        if(!toMute) return message.channel.sendMessage("you didnt mention the users");
        return(message.channel.sendMessage("mutes"));
      }
/*
        let role = message.guild.roles.find( r => r.name === "MUTED");
        if(!role)
        {
        try {
        role =   await message.guild.createRole({
          name: "MUTED",
          color:"#00000",
          permissions: []
        });
        message.guild.channels.forEach(async(channel, id ) =>{
            await channel.overwritePermissions(ro,
            {
              SEND_MESSAGES: false,
              ADD_REACTION : false
            });
                });
                    } catch (e) {
           console.log(e.stack);
          }
        }
        return;
    }

*/

if(!coins[message.author.id])
{
  coins[message.author.id]
  {
    coins :0
  };
}

let coinAmt = Math.floor(Math.random()*15)+1;
let baseAmt = Math.floor(Math.random()*15)+1;
console.log(`$[coinAmt]; $[baseAmt]`);


  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
};
fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
if (err) console.log(err)
});
let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#0000FF")
.addField("💸", `${coinAmt} coins added!`);

message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
    }




let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    //.setColor(purple)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
      });

//if users spam it will cool them down for a bit.


//when the user joins the server it will greet them with welcome.


});


//While bot on, if pharase are said, the bot will react it different ways.

//this is the discord token from the botconfig.json
client.login(botconfig.token);
