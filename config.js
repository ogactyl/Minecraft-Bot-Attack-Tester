module.exports = {
    // Server Connection Details
    server: {
        host: "fr.souldrain.in",
        port: 25637,
        version: "1.21.5" // Updated to match your server version
    },

    // Bot Configuration
    bots: {
        count: 500, // Number of bots to spawn
        joinDelay: 10, // Delay between each bot joining (ms)
    },

    // Naming Strategy
    naming: {
        type: "random", // "sequential" (Name1, Name2) or "random" (Xy8kL9)
        baseName: "StressBot", // Used for sequential naming
        randomLength: 8 // Length of random names
    },

    // Authentication / On Join Command
    auth: {
        enabled: false,
        // Command to execute after joining. 
        // useful for /register <password> or /login <password>
        command: "/register password123",
        delay: 1000 // Time to wait after spawning before sending command (ms)
    },

    // Spam Configuration
    spam: {
        enabled: true,
        interval: 3000, // Time between messages (ms)
        messages: [
            "This is a stress test!",
            "Checking anti-bot systems",
            "Lag test in progress",
            "Bot attack simulation",
            "Please ignore this bot"
        ]
    }
};
