import { ClientCommand } from "../classes/command.ts";

const optionsMessages = {
    cat: "Have a cat! 🐱",
    dog: "Have a dog! 🐶"
}

new ClientCommand({
    name: "catordog",
    description: "Select between car or dog!",
    options: [
        {
            name: "animal",
            description: "Select between cat or dog",
            type: "STRING",
            required: true,
            choices: [
                {
                    name: "Cat",
                    value: "cat"
                },
                {
                    name: "Dog",
                    value: "dog"
                }
            ]
        }
    ],

    execute(input, args) {
        console.log(args);
    }
});