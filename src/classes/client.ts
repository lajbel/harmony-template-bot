import {
    Client as DiscordClient,
    ClientOptions as DiscordClientOptions
} from "harmony";
import { ClientCommandOptions } from "./command.ts";

interface ClientOptions extends DiscordClientOptions {
    prefix: string;
}

export class Client {
    discordClient: DiscordClient;
    prefix: string;
    commands: Map<string, ClientCommandOptions>

    constructor(opt: ClientOptions) {
        this.prefix = opt.prefix;
        this.discordClient = new DiscordClient(opt);
        this.commands = new Map();
    }

    connect() {
        return this.discordClient?.connect();
    }

    addCommand(command: ClientCommandOptions) {
        console.log(`New command loaded to client: ${command.name}`)
        this.commands.set(command.name, command);
    }
}
