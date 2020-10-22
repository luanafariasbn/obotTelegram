

const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
bot.use(async (ctx, next)=>{
    const start = new Date()
    await next()
    const ms = new Data - start
    const dataEHora = new Date().tolocaleString();
    console.log(`${dataEHora} \n Tempo de resposta: ${ms}ms`)
})
//escuta do comando /star
bot.start(async ctx => {
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    if(from.username === 'Luana'){
        await ctx.reply(`Olá ${from.username}, o seu nome é: 
    ${from.first_name} ${from.last_name}!`)
    }else{
    await ctx.reply(`Não podemos conversar`)
    }
})

//evento de recepção de texto
bot.on('text', ctx => ctx.reply('Olá, Como vai?'))


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