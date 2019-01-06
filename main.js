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
 client.user.setActivity( `How many users online: ${client.guilds.size}`);
   console.log(client.commands);

});






 //let xp = require('./usersxp.json');
let xp = require('./xp.json');




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




  //setting xpAdd to = math.floor(Math.random() * ) + ;

  let xpAdd = Math.floor(Math.random() * 100) + 8;
  //console.log (xpadd) to see if it works.
    console.log(xpAdd);
  //if the users not created in the file yet, set them to xp:0, level 0
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 0
      };
    }

  //let the current xp with the author.id e.g. 180783462578520064
    let currentxp = xp[message.author.id].xp;
   //let the current level with the author id. levle
   let currentlvl = xp[message.author.id].level;
  //each level up will take * 900. e.g. level 2 will be 1800 xp
    let nextlvl = xp[message.author.id].level * 900;
  // currentxp + xpAdd
    xp[message.author.id].xp = currentxp + xpAdd;
  //when xp gets to the nextlevel it will pop up the new level
    if(nextlvl <= xp[message.author.id].xp)
  {
      xp[message.author.id].level = currentlvl +1;

    // using the RichEmbed from discord.js libary
    let levelup = new Discord.RichEmbed()
    .setTitle("Level uppp")
    //new field, will display the new level from currentlvl + 1.
    .addField("New Level",currentlvl + 1);
    message.channel.send(levelup);
            }

    //write to the xp.json. if theres a error it will console.log it .
    fs.writeFile("./xp.json", JSON.stringify(xp), (error) => {
      if(error) console.log(error)
        });
});







//While bot on, if pharase are said, the bot will react it different ways.

//this is the discord token from the botconfig.json
client.login(botconfig.token);
