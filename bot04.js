const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

//executar o comando /start
bot.start(ctx=>{
    const nome = ctx.message.from.first_name + ' '+
    ctx.messege.first_name
    ctx.reply(`Seja bem vindo ${nome}!`)
})

//Evento de texto
bot.on ('text', ctx=>{
    ctx.reply(`Texto: '${ctx.message.text}' recebido com sucesso`)
})

//evento de localização
bot.on('location', ctx =>{
    const location = ctx.message.locationctx.reply(`Sua localização é:
     ${location.latitude} ${location.longetude}`)
})

//Evento de contatos
bot.on('contact', ctx =>{
const contact = ctx.message.contact
console.log(contact)
ctx.reply(`Vou guardar o contato de ${contact.first_name} 
e
telefone ${contact.phone_numbers}`)
})

//evento de voz
bot.on('voice', ctx => {
    const voice = ctx.message.voice
    console.log(voice)
    ctx.reply(`Áudio recebido, ele possui ${voice.duration}`)
})

bot.on('photo', ctx=>{
    const photo = ctx.message.photo
    console.log(photo)
    photo.forEach((ft, i) => {
        ctx.reply(`Foto $(i) tem resolução de ${ft.width}x${ft.height}`)
    })
})

//evento de figurinha (sticker)

bot.on('sticker', ctx =>{
    const figurinha = ctx.message.sticker
    console.log(figurinha)
    ctx.reply(`Você enviou ma figurinha correspondente ${figurinha.emoji}
    do PACOTE ${figurinha.set_name}`)
})

bot.on('animation', ctx =>{
const animation = ctx.messege.animatio
console.log(animation)
ctx.reply(`Esta animação dura ${animation.duration} e o
${animation.font_size}`)
})

bot.launch()