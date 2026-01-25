# Minecraft Bot Attack Tester

A configurable tool for testing Minecraft server anti-bot defenses using [Mineflayer](https://github.com/PrismarineJS/mineflayer).

> **⚠️ WARNING**: This tool is for educational and testing purposes only. Do not use this on servers you do not own or have permission to test.

## Features

- **Multiple Bots**: Spawn a configurable number of bots.
- **Naming Strategies**: Sequential (Bot1, Bot2) or Random (Xy8kL9).
- **Spam Testing**: Configurable spam messages and intervals.
- **Connection Staggering**: Configurable delay between bot joins.
- **Authentication**: Automatically executes commands like `/register <password>` upon joining.

## Installation

1. Install [Node.js](https://nodejs.org/).
2. Open this folder in a terminal.
3. Run `npm install` to install dependencies.

## Configuration

Edit `config.js` to change settings:

```javascript
module.exports = {
    server: {
        host: "localhost",
        port: 25565,
    },
    bots: {
        count: 5,
        joinDelay: 2000, // 2 seconds between joins
    },
    auth: {
        enabled: true,
        command: "/register password123",
        delay: 1000 // Wait 1s after join to register
    },
    // ... other settings
};
```

## Usage

Run the bot attacker:

```bash
node index.js
```

## Troubleshooting

- **Bots Getting Kicked?** Increase `joinDelay` or check if the server has an IP limit.
- **Connection Refused?** Verify `host` and `port` in `config.js`.
