const fs = require('fs');
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const {prefix} = require('./config.json');
const client = new Discord.Client();
client.commands= new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
const command = require(`./commands/${file}`);
client.commands.set(command.name, command);
}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Bot prefix is $', { type: 'PLAYING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
});
client.on('message', message => {
	
	if(message.author.id == '435607040812122122'){
		message.react("819468764637954099")
	}
	
	if(message.author.id == '238762286922072064'){
		message.react("824126495999000576")
	}
	
	
	
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;
	
	try{
		client.commands.get(command).execute(message, args);
	} catch(error){
	console.error(error);
	message.reply('there was an error trying to execute that command!');
	
}
});
client.login(process.env.BOT_TOKEN);
