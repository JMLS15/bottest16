module.exports = {
	name: 'avatar',
	description: 'It only shows your avatar.',
	execute(message){
    message.reply(message.author.displayAvatarURL());
}
}