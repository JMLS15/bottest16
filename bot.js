const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 'hola') {
    msg.reply('hola!!!');
}
});

client.on('message', msg => {
  if(msg.content === 'cual es mi avatar') {
    msg.reply(msg.author.displayAvatarURL());
}
});

client.on('message', message => {
   if(message.content === '!happy') {
    const attachment = new MessageAttachment('https://i.imgur.com/Mzh3ZVE.gif');
   message.channel.send(`${message.author}, is happy!!`, attachment);
}
});

client.on('message', message => {
if(message.content === '!test2') {
const embed = new MessageEmbed()
.setTitle('TEST')
.setColor(0xff0000)
.setDescription('Hola');
message.channel.send(embed);
}
});

const palmaditasrandom = [
'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
'https://i.gifer.com/TSw8.gif',
'https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819',
'https://image.myanimelist.net/ui/2YIpTa2PtH9T744VwzZ3FJlmgvdHWJvde1lmn8hOsb-EAqezGHNWjBb7Bjx0NFEiYgjA3KZ0jXIAgiRlmrR_uNbhC3sm_KGVM1nO6Pmx8wTlgZ-NcP2OBBuvEk6b3ozp'
]

client.on('message', message => {
if(message.content.startsWith('palmaditas')){
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
});

client.on('message', async message => {
if(message.content ==='/join'){
if(message.member.voice.channel){
const connection = await message.member.voice.channel.join();
const broadcast = client.voice.createBroadcast();
const ytdl = require("discord-ytdl-core");
broadcast.play(ytdl('https://www.youtube.com/watch?v=4QXCPuwBz2E', { filter: 'audioonly' }));
for (const connection of client.voice.connections.values()) {
  connection.play(broadcast);
}
}else{
message.reply('Necesitas entrar a un canal primero');
}
}
});
client.on('message', async message => {
if(message.content ==='/leave'){
if(message.member.voice.channel){
const connection = await message.member.voice.channel.leave();
}
}
});
client.login(process.env.BOT_TOKEN);
