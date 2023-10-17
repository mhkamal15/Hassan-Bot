import os
import random
import discord
from keep_alive import keep_alive

intents = discord.Intents.default()
intents.message_content = True

class HassanBot(discord.Client):
    def __init__(self, **options):
        super().__init__(**options)

        # List of jokes
        self.jokes = [
            "Why did the scarecrow win an award? Because he was outstanding in his field.",
            "What do you call a fish with no eyes? Fsh!",
            "What do you call a cow with no legs? Ground beef.",
            "Why did the scarecrow win an award? Because he was outstanding in his field.",
            "What do you call a fish with no eyes? Fsh!",
            "What do you call a cow with no legs? Ground beef.",
        ]

        # List of facts about Pakistan
        self.facts = [
            "Pakistan is the fifth-most populous country in the world.",
            "Pakistan is the world's largest Muslim-majority country.",
            "Pakistan is home to the world's second-highest mountain, K2.",
            "Pakistan is the world's seventh-largest nuclear power.",
            "Pakistan is a member of the United Nations, the Organisation of Islamic Cooperation, and the Commonwealth of Nations.",
        ]

        # List of unallowed words
        self.unallowed_words = ["shit", "fuck", "bitch", "nigger", "nigga", "kys", "dick", "pussy", "asshole", "bastard", "damn", "kinky", "suck", "kys" "self harm" "self-harm"]

    async def on_ready(self):
        print('Hassan Bot is ready!')

    async def on_message(self, message):
        # Respond to the /info command
        if message.content.startswith('/info'):
            await message.channel.send('Hi! My name is Hassan Bot. Named after Mohammed "Hassan" Khan, a famed member of the community and a dear friend of the creator. I was created by Malek Kamal in 2023, who worked day and night to make me work the way I do! I am currently in development version 1.0. Thanks for asking!')

        # Detect unallowed words
        unallowed_words = self.detect_unallowed_words(message.content)

        # Ping the user and say "Haram you little gremlin" if any unallowed words are found
        if unallowed_words:
            await message.channel.send(f'<@{message.author.id}>, Haram! Same to you, you fat loner.')

        # Respond to the /joke command
        elif message.content.startswith('/joke'):
            await message.channel.send(random.choice(self.jokes))

        # Respond to the /fact command
        elif message.content.startswith('/fact'):
            await message.channel.send(random.choice(self.facts))

        # Respond to the /math command
        elif message.content.startswith('/math'):
            try:
                result = eval(message.content[6:])
                await message.channel.send(str(result))
            except Exception as e:
                await message.channel.send(f'Error: {e}')

        # Respond to messages that mention the word "Hassan"
        elif 'Hassan' in message.content:
            await message.channel.send('Who has summoned me?')

        # Respond to messages that say "shut up"
        elif message.content == 'shut up':
            await message.channel.send('Not in my good Muslim house you shall say that :-(')

    def detect_unallowed_words(self, message):
        unallowed_words = []
        for word in message.split():
            if word in self.unallowed_words:
                unallowed_words.append(word)

        return unallowed_words

if __name__ == '__main__':
    HassanBot = HassanBot(intents=intents)
    HassanBot.run(os.getenv('TOKEN'))

async def on_member_join(self, member):
    # Get the channel object by name (replace "general" with the channel you want)
    channel = discord.utils.get(member.guild.channels, name='announcements')

    # Ping the user and say "Welcome to the server!"
    await channel.send(f'Welcome to the server, <@{member.id}>! I hope you find our server welcoming :)')

if __name__ == '__main__':
    HassanBot = HassanBot(intents=discord.Intents.default())
    keep_alive()
HassanBot.run(os.getenv('TOKEN'))
