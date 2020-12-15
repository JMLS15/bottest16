const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();
const palmaditasrandom = [
'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
'https://i.gifer.com/TSw8.gif',
'https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819',
'https://image.myanimelist.net/ui/2YIpTa2PtH9T744VwzZ3FJlmgvdHWJvde1lmn8hOsb-EAqezGHNWjBb7Bjx0NFEiYgjA3KZ0jXIAgiRlmrR_uNbhC3sm_KGVM1nO6Pmx8wTlgZ-NcP2OBBuvEk6b3ozp'
]
const waifu = [
'https://media1.tenor.com/images/f8539f656d2ed90be7cd3bbe95d263d2/tenor.gif',
'https://media1.tenor.com/images/22d2021540541e319091c1e89774e008/tenor.gif',
'https://media1.tenor.com/images/fb1aa76944c156acc494fff37ebdbcfa/tenor.gif',
'https://media1.tenor.com/images/bab39de2e95b92fe1245835c34fbdd9f/tenor.gif',
'https://media1.tenor.com/images/2bb4fa47040dfbee1c622be1fa6daad6/tenor.gif',
'https://media1.tenor.com/images/6c2243fcf5eec62d6c43e5078c30b1ca/tenor.gif',
'https://media1.tenor.com/images/110dbddfd3d662479c214cacb754995d/tenor.gif',
'https://media1.tenor.com/images/445c3de1f9a6a87694bcbb2739d35451/tenor.gif',
'https://media1.tenor.com/images/f79f75d9e191685b6dde036db495fe25/tenor.gif',
'https://media1.tenor.com/images/22d2021540541e319091c1e89774e008/tenor.gif',
'https://media1.tenor.com/images/8d4dcb14c0ca204a1e84b7f9c78c992a/tenor.gif',
'https://steamuserimages-a.akamaihd.net/ugc/922542758751203868/4D251D954B1EE2A1A2F04D9532F913EA1FA1AF9F/'
]
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Bot prefix is $', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});
client.on('message', message => {
  if (message.content === '$ping') {
    message.reply('pong');
  }
  if (message.content === 'Hey Jencuck. sos un coke') {
	  message.channel.send('<@426511675353595907>');
	  message.channel.send(':regional_indicator_o: :regional_indicator_k: :regional_indicator_j: :regional_indicator_o: :regional_indicator_t: :o2:');
	  message.channel.send('https://cdn.discordapp.com/attachments/428654179217571842/766906873877233665/8e71f5d2bdfd752a17a40b407a932ca8.mp4');
  }
  if (message.content === '¡Hey Jencuck. sos un coke') {
	  message.channel.send('<@426511675353595907>');
	  message.channel.send(':regional_indicator_o: :regional_indicator_k: :regional_indicator_j: :regional_indicator_o: :regional_indicator_t: :o2:');
	  message.channel.send('https://cdn.discordapp.com/attachments/428654179217571842/766906873877233665/8e71f5d2bdfd752a17a40b407a932ca8.mp4');
  }
  if (message.content === '¡Hey Jencuck. sos un coke!') {
	  message.channel.send('<@426511675353595907>');
	  message.channel.send(':regional_indicator_o: :regional_indicator_k: :regional_indicator_j: :regional_indicator_o: :regional_indicator_t: :o2:');
	  message.channel.send('https://cdn.discordapp.com/attachments/428654179217571842/766906873877233665/8e71f5d2bdfd752a17a40b407a932ca8.mp4');
  }
  if (message.content === '!ok') {
	  
	  message.channel.send('<@426511675353595907>');
	  message.channel.send(':regional_indicator_o: :regional_indicator_k: :regional_indicator_j: :regional_indicator_o: :regional_indicator_t: :o2:');
	  message.channel.send('https://cdn.discordapp.com/attachments/428654179217571842/766906873877233665/8e71f5d2bdfd752a17a40b407a932ca8.mp4');
	  message.delete({ timeout: 1 })
     .then(msg => console.log(`Deleted message from ${msg.author.username} after 1 miliseconds`))
     .catch(console.error);
  }
  if (message.content === '$hola') {
    message.reply('hola!!!');
}
  if (message.content === '$cual es mi avatar') {
    message.reply(message.author.displayAvatarURL());
}
  if (message.content === '$happy') {
    const attachment = new MessageAttachment('https://i.imgur.com/Mzh3ZVE.gif');
   message.channel.send(`${msg.author}, is happy!!`, attachment);
}
  if (message.content === '$test2') {
const embed = new MessageEmbed()
.setTitle('TEST')
.setColor(0xff0000)
.setDescription('Hola');
message.channel.send(embed);
}
  if (message.content.startsWith('$palmaditas')){
const user = message.mentions.users.first();
if(user){
const embed = new MessageEmbed()
.setDescription(`${message.author} le a dado unas palmaditas a ${user}`)
.setColor('RANDOM')
.setImage(palmaditasrandom[Math.floor(Math.random() * palmaditasrandom.length)])
message.channel.send(embed);
}else{
message.reply("No mencionaste a nadie.");
}
}
  if (message.content.startsWith('$waifu gif')){
const embed = new MessageEmbed()
.setDescription(`Aca tenes tu waifu ${message.author}`)
.setColor('RANDOM')
.setImage(waifu[Math.floor(Math.random() * waifu.length)])
message.channel.send(embed);
}
});
client.login(process.env.BOT_TOKEN);
