export.run = async (client, message, args,cmd ) => {

  const rando_imgs = [
  'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
  'https://media.giphy.com/media/CZpro4AZHs436/giphy2.gif',
  'https://media.giphy.com/media/CZpro4AZHs436/giphy3.gif',
  ]

  client.on('message',  message =>
  {
   if (message.content.startsWith("Daddy"))
   {
     message.channel.send(":sweat_drops:")
     return;
   }
     if (message.content.startsWith("I'm a lad"))
     {
       message.channel.send("nah" + message.author);

       return;
     }

     if (message.content.startsWith("pan" ))
     {
     message.channel.send("who doesnt like a pan", { files: [rando_imgs[Math.floor(Math.random() * rando_imgs.length)]]});

     }


  });

};
