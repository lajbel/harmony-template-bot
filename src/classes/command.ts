import type { Interaction, ApplicationCommandPartial, Message } from "harmony";
import { client } from "../client.ts"

export interface ClientCommandOptions extends ApplicationCommandPartial {
    execute: (input: Interaction | Message, args: Map<string, string>) => void;
}

export class ClientCommand {
    opt: ClientCommandOptions;

    constructor(public userOpt: ClientCommandOptions) {
        this.opt = userOpt;
        client.addCommand(this.opt);
    }
}