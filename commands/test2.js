const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
module.exports = {
	name: 'test2',
	description: 'TEST',
	execute(message){
const embed = new MessageEmbed()
.setTitle('TEST')
.setColor(0xff0000)
.setDescription('Hola');
message.channel.send(embed);
}
}