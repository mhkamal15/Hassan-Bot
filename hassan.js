const Discord = require('discord.js')
const axios = require('axios')
const client = new Discord.Client()

const PREFIX = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', async message => {
  if (message.author.bot) return
  if (message.content.startsWith(PREFIX)) {
    const command = message.content.slice(PREFIX.length).trim().split(/ +/g)[0]
    const args = message.content.slice(PREFIX.length).trim().split(/ +/g).slice(1)
    switch (command) {
      case 'rap':
        message.channel.send('**Rap beat dropping in 3...2...1...**\nhttps://www.youtube.com/watch?v=PsO6ZnUZI0g')
        break
      case 'fact':
        try {
          const response = await axios.get('https://uselessfacts.jsph.pl//random.json?language=en')
          const fact = response.data.text
          message.channel.send(`**Did you know?**: ${fact}`)
        } catch (error) {
          console.error(error)
        }
        break
      case 'talk':
        const statement = args.join(' ')
        message.channel.send(`I hear you say "${statement}". Hmmmm... 🤔`)
        break
      default:
        if (message.content.toLowerCase().includes('kys')) {
          message.channel.send('You too')
        } else if (message.content.toLowerCase().includes('you\'re dumb')) {
          message.channel.send('STFU, retard')
        } else if (message.content.toLowerCase().includes('hello') || message.content.toLowerCase().includes('hi')) {
          message.channel.send('Well, hello there!')
        }
        break
    }
  }
})

client.login('MTA5OTM4MDgyNjA1NzIxNjAyMA.GcXhp3.AVEX9zqJ_-lXokuDKRhRqioivRj2uVGekdta6M')
