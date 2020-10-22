

const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

//evento de localização
bot.on('location', async ctx => {
    const location = ctx.message.location
    console.log(location)
    const lat = location.latitude
    const lon = location.longitude
    await ctx.replyWithLocation(lat,lon)
    await ctx.reply(`https://www.google.com/maps/@${lat},${lon},17z`)
    await ctx.reply(` você está em Lat: ${lat} - Lon ${lon}!`)
    
})
bot.launch()