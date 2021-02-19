const Discord = require('discord.js');
const { logger } = require('helpers');

const client = new Discord.Client();

module.exports = () => {
    client.on('ready', () => {
        //logger.info('Bot listo');
        console.log('Bot listo')
    });
    client.login('ODExMTk0MzI1NTg0NDQ1NDYw.YCuplg.ksQ5GjrIy-N9s8coJid7APcjavY');
}