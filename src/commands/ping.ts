import { ClientCommand } from "../classes/command.ts";

new ClientCommand({
    name: "ping",
    description: "Ping!",

    execute(input) {
        input.reply("Pong!");
    }
});