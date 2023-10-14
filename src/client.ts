import { Client } from "./classes/client.ts";
import { importModules } from "./util/importModules.ts";

export const client = new Client({
    prefix: "!",
    intents: [
        'GUILDS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES',
    ],
    forceNewSession: true,
});

await client.connect();

importModules("commands");
importModules("handlers");