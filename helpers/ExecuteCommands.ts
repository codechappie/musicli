import { newComands } from "@/components/text-list/textList";

export const setCommand = (newCommand: any) => {
    const inputTerminal: any = document.getElementById("terminal-input");
    console.log("new command: " + newCommand);
    if (inputTerminal) {
        inputTerminal.value = newComands[newCommand];
    }

}