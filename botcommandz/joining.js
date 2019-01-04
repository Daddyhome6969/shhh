const Discord = require ("discord.js");
const commando = require("discord.js-commando");
const ytdl = require("ytdl-core");



exports.run = async(client,message,args)=>
{

  //const serverQueue = queue.get(message.guild.id);

 if (!message.member.voiceChannel) return message.channel.send("please connect to a channel");

 if(message.guild.me.voiceChannel) return message.channel.send('sorry im in ');

 if(!args[0] )return message.channel.send('please put in url');
//validating the url of the youtube.
/*if (!serverQueue)
{
  const queueconstruct = {
    textChannel: messge.channel,
    voiceChannel: voiceChannel,
    connect: null,
    songs: [],
    Playing : true
  };
  queue.set(message.guild.id, queueconstruct);
}*/
let validation = await ytdl.validateURL(args[0]);

if(!validation) return message.channel.send("sorry the url isnt right");

let infor = await ytdl.getInfo(args[0]);
//
let connection = await message.member.voiceChannel.join();
//when
const dispatcher = await connection.playStream﻿(ytdl(args[0], {filter: 'audioonly'}))
.on ('end', () =>{
console.log('song ended');
voiceChannel.disconnect();

})

.on('err', error => {
 console.console(err);

});


dispatcher.setVolumeLogarithmic(5 / 5);

message.channel.send(`now playing: ${infor.title}`);




}
     module.exports.help = {

       name:"joins"

     }
