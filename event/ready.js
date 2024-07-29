module.exports = async (client) => {
  client.Ready = true, 
    client.user.setPresence({
        activity: { 
            name: 'Bot Support Server discord,gg/csrp1', // The message shown
            type: 'WATCHING', // PLAYING, WATCHING, LISTENING, STREAMING
        },
        status: 'online' // You can show online, idle, dnd(Do Not Disturb)
    })
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};
