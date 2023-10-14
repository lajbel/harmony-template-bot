import type { Interaction, Message } from "harmony";
import { client } from "../client.ts";
const { discordClient } = client;

function processCommand(
    input: Interaction | Message,
    command: string,
) {
    const cmd = client.commands?.get(command);
    if (!cmd) return;
    const args = new Map<string, string>();

    cmd.options?.forEach((option) => {
        args.set(option.name, "non");
    });

    cmd.execute(input, args);
}

discordClient.on("interactionCreate", (interaction) => {
    if (interaction.isApplicationCommand()) {
        const args = new Map<string, string>();
        interaction.data?.options?.forEach((option) => {
            args.set(option.name, option.value);
        });
        processCommand(interaction, interaction.data?.name || "");
    }
});

discordClient.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(client.prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();
    if (!command) return;
    processCommand(message, command);
});