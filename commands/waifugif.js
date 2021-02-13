const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const waifu = [
'https://media.giphy.com/media/fT3PPZwB2lZMk/giphy.gif',
'https://media.giphy.com/media/BejdfvEt6eoV2/giphy.gif',
'https://media.giphy.com/media/uXXZn2RGRzS9BlUCK6/giphy.gif',
'https://media.giphy.com/media/Id0IZ49MNMzKHI9qpV/giphy.gif',
'https://media.giphy.com/media/UYzNgRSTf9X1e/giphy.gif',
'https://media.giphy.com/media/12wr8S2n5fL8lO/giphy.gif',
'https://media.giphy.com/media/wiFxDY1R6cKje/giphy.gif',
'https://media.giphy.com/media/3o7btMCltyDvSgF92E/giphy.gif',
'https://media.giphy.com/media/4pk6ba2LUEMi4/giphy.gif',
'https://media.giphy.com/media/MdLFOyVZtoUPm/giphy.gif',
'https://media.giphy.com/media/KKB54xpucNE4M/giphy.gif',
'https://media.giphy.com/media/3o7bul4bNw60uhhQyI/giphy.gif',
'https://media.giphy.com/media/7C7pNe8NIpbFe/giphy.gif',
'https://media.giphy.com/media/kz5yaaP059xtcYd5lC/giphy.gif',
'https://media.giphy.com/media/XdUr7e0X1Kjeg/giphy.gif',
'https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif',
'https://media.giphy.com/media/RLW8eXPdTXs3H1O3gu/giphy.gif',
'https://media.giphy.com/media/yb9M8WaGrh12o/giphy.gif',
'https://media.giphy.com/media/VpcYdQpElriNy/giphy.gif',
'https://media.giphy.com/media/ftZ8Smav6dMPe3e99W/giphy.gif',
'https://media.giphy.com/media/WoFiFuqscSFXzuCHv4/giphy.gif',
'https://media.giphy.com/media/QW3qU91Rplde6iy6p1/giphy.gif'
]
module.exports = {
	name: 'waifugif',
	description: 'RANDOM WAIFUS FOR FREE',
	execute(message){
	 const embed = new MessageEmbed()
    .setDescription(`Aca tenes tu waifu ${message.author}`)
    .setColor('RANDOM')
    .setImage(waifu[Math.floor(Math.random() * waifu.length)])
     message.channel.send(embed);
	}
}