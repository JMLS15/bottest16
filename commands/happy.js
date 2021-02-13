const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
module.exports = {
	name: 'happy',
	description: 'An image showing your happiness.',
	execute(message){
		const attachment = new MessageAttachment('https://i.imgur.com/Mzh3ZVE.gif');
		message.channel.send(`${message.author}, is happy!!`, attachment);
	}
}