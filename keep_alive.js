const keepAlive = () => {
  setInterval(() => {
    const url = 'https://discord.com/api/v8/users/@me/channels';
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bot ${process.env.DISCORD_BOT_SECRET}`,
      },
    });
  }, 60000);
};

keepAlive();
