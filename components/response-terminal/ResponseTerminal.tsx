
export const responseTerminal = (commandsArr: Array<string>, response: string) => {

    return `<div class="screen-terminal__container__line">
    <span class='command-start'>
        <div class="root">▲</div>
        <div class="path">~ cli</div>
        <!--<div class="type">♬ Music</div>-->
    </span>
    <div class='input' spellcheck="false">${commandsArr.map((comm: string) => (
        `<span class="${comm}">${comm}</span>`
    )).join(" ")}
    </div>
</div>
<div class='response' spellcheck="false">
    ${response}
</div>`;
}

export const terminalPlayer = (audioData: any) => {
    return `<small>Reproduciendo:</small>
    <h2>${audioData.title}</h4>
    <h4>${audioData.author}</h4>`
}