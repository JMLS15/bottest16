const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const palmaditasrandom = [
'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
'https://i.gifer.com/TSw8.gif',
'https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819',
'https://image.myanimelist.net/ui/2YIpTa2PtH9T744VwzZ3FJlmgvdHWJvde1lmn8hOsb-EAqezGHNWjBb7Bjx0NFEiYgjA3KZ0jXIAgiRlmrR_uNbhC3sm_KGVM1nO6Pmx8wTlgZ-NcP2OBBuvEk6b3ozp'
]
module.exports = {
	name: 'palmaditas',
	description: 'PALMADITAS FOR SOMEONE UWU',
	execute(message){
    const user = message.mentions.users.first();
    if(user){
    const embed = new MessageEmbed()
    .setDescription(`${message.author} le ha dado unas palmaditas a ${user}`)
    .setColor('RANDOM')
    .setImage(palmaditasrandom[Math.floor(Math.random() * palmaditasrandom.length)])
    message.channel.send(embed);
    }else{
    message.reply("No mencionaste a nadie.");
}
}
}