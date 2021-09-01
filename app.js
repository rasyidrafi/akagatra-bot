const bot = require('./functions/init');
const commands = require('./functions/commands');

bot.start(ctx => ctx.reply(commands.start))
bot.help(ctx => ctx.reply(commands.help))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

console.log("Bot Successfully Started");