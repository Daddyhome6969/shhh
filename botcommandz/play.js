const yt = require("ytdl-core")

module.exports.run = async (cleint, message, args) => {
if (!message.member.voiceChannel) return message.channel.send("You need to be inside  a voice channel");

    if(!args[0]) return message.channel.send("you need to be in a voiceChannel");

    //using let validte for yt.validateURL.
    let validate = await yt.validateURL(args[0]);


  //if not validate then return this message.
if(!validate) return message.channel.send("sorry please enter a youtube url")

  //this is where we get the info about the title of the youtube url
  let info = await yt.getInfo(args[0]);

    //connections is wait, for member to join voice channel.
    let connection = await message.member.voiceChannel.join();

    //connection. playstreat to filter to audio only
    connection.playStream(yt(args[0], {filter: "audioonly"}));

    //bot will send now playing + the info title.
    message.channel.send("Now playing: " + info.title)


}

module.exports.help = {
    name: "play"
}
