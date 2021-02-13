const { prefix } = require('../config.json');
module.exports = {
	name: 'commands',
	description: 'List all of my commands.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args){
		const data = [];
		const {commands} = message.client;
		data.push('Here\'s a list of all my commands:');
		data.push(commands.map(command => command.name).join(', '));
		message.reply(data, { split: true });
}
}