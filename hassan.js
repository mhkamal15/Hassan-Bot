const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildIntegrations
  ],
});

const fetch = require('node-fetch');

const jokes = [
  'Why did the tomato turn red? Because it saw the salad dressing!', 
  'Why was the math book sad? Because it had too many problems.', 
  'What do you call fake spaghetti? An impasta.', 
  'What do you call a bear with no teeth? A gummy bear.', 
  'Why don’t scientists trust atoms? Because they make up everything.'
];

const facts = [
  'Pakistan is the world’s 6th most populous country.', 
  'Pakistan’s official name is “Islamic Republic of Pakistan”', 
  'Pakistan was first created on August 14, 1947.', 
  'Pakistan is the only Muslim nuclear power country.', 
  'Shahid Afridi has hit 476 sixes in his international cricket career.'
];

client.on('ready', () => {
  console.log("I'm in");
  console.log("Hassan Bot");
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) {
    return;
  }

  const { commandName } = interaction;

  if (commandName === 'info') {
    await interaction.reply('Hi! My name is Hassan Bot. Named after Mohammed "Hassan" Khan, a famed member of the community and a dear friend of the creator. I was created by Malek Kamal, who worked day and night to make me work the way I do! I am currently in development version 1.0. Thanks for listening to me!');
  } else if (commandName === 'joke') {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    await interaction.reply(randomJoke);
  } else if (commandName === 'fact') {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    await interaction.reply(randomFact);
  } else if (commandName === 'math') {
    const num1 = parseInt(interaction.options.getString('num1'));
    const num2 = parseInt(interaction.options.getString('num2'));
    const operator = interaction.options.getString('operator');

    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operator';
        break;
    }

    await interaction.reply(result.toString());
  }
});

client.on('messageCreate', async message => {
  const msg = message.content.toLowerCase();

  if ((msg.includes('hassan')) && (message.author.id !== client.user.id)) {
    await message.reply('Who summoned me?');
  }

  if ((msg.includes('shut up')) && (message.author.id !== client.user.id)) {
    await message.reply('I am not supposed to respond to that.');
  }
});

client.login(process.env.DISCORD_BOT_SECRET);

const keepAlive = () => {
setInterval(() => {
    const url = 'https://discord.com/api/v8/users/@me/channels';
    fetch(url, {
      method: 'GET',
      headers: {
      Authorization: `Bot ${process.env.DISCORD_BOT_SECRET}`,
      },
    })
    .then(res => {
      console.log('pinged');
    });
  })}
