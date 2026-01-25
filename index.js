const mineflayer = require('mineflayer');
const config = require('./config');
const { generateRandomName } = require('./utils');

console.log(`[Launcher] Starting ${config.bots.count} bots...`);
console.log(`[Launcher] Target: ${config.server.host}:${config.server.port}`);

let botsLaunched = 0;

function createBot(botName, index) {
    const bot = mineflayer.createBot({
        host: config.server.host,
        port: config.server.port,
        username: botName,
        version: config.server.version || false
    });

    bot.once('spawn', () => {
        console.log(`[${botName}] Spawned!`);

        // Authentication / On Join Command
        if (config.auth.enabled && config.auth.command) {
            setTimeout(() => {
                console.log(`[${botName}] Executing auth command: ${config.auth.command}`);
                bot.chat(config.auth.command);
            }, config.auth.delay);
        }

        // Spam feature
        if (config.spam.enabled && config.spam.messages.length > 0) {
            setInterval(() => {
                const randomMsg = config.spam.messages[Math.floor(Math.random() * config.spam.messages.length)];
                // Add a random suffix to avoid spam filters that block duplicate messages
                const uniqueMsg = `${randomMsg} [${Math.floor(Math.random() * 1000)}]`;
                bot.chat(uniqueMsg);
            }, config.spam.interval);
        }
    });

    // Error handling
    bot.on('error', (err) => {
        console.log(`[${botName}] Error:`, err.message);
    });

    bot.on('kicked', (reason) => {
        console.log(`[${botName}] Kicked:`, reason);
    });

    bot.on('end', () => {
        console.log(`[${botName}] Disconnected`);
    });
}

function start() {
    let currentBot = 0;

    const interval = setInterval(() => {
        if (currentBot >= config.bots.count) {
            clearInterval(interval);
            console.log('[Launcher] All bots launched!');
            return;
        }

        let botName;
        if (config.naming.type === 'random') {
            botName = generateRandomName(config.naming.randomLength);
        } else {
            botName = `${config.naming.baseName}${currentBot + 1}`;
        }

        createBot(botName, currentBot);
        currentBot++;

    }, config.bots.joinDelay);
}

start();
