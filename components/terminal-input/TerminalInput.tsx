import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { responseTerminal, terminalPlayer } from '../response-terminal/ResponseTerminal';
import { textList } from '../text-list/textList';

const TerminalInput = () => {

    useEffect(() => {
        const terminalInput: any = document.getElementById('terminal-input');
        terminalInput.focus();
    }, [])
    

    const localArray: String[] = [];
    const [pageTitle, setPageTitle] = useState("")
    const [localCommands, setLocalCommands] = useState<any>([]);
    const audioArr = [
        {
            id: "Spirit Blossom RomanBelov",
            title: "Spirit Blossom",
            author: "RomanBelov",
            profileURL: [
                {
                    site: "pixabay",
                    URL: "https://pixabay.com/users/romanbelov-25347333/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=15285",
                    siteURL: "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=15285"
                }
            ],
            audio: "../../audio/radio/spirit-blossom.mp3",
            categories: ["LoFi", "Beat", "Piano"],
            contentId: true,
        },
        {
            title: "Far From Home Acoustic Version",
            author: "madirfan",
            profileURL: [
                {
                    site: "pixabay",
                    URL: "https://pixabay.com/users/madirfan-50411/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=13463",
                    siteURL: "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=13463"
                }
            ],
            audio: "../../audio/radio/far-from-home-acoustic-version.mp3",
            categories: ["Lofi", "Chill", "Ambit"],
            contentId: "free to use",
        },
        {
            title: "Let It Go",
            author: "ItsWat",
            profileURL: [
                {
                    site: "pixabay",
                    URL: "https://pixabay.com/users/itswatr-12344345/?tab=audio&amp;utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=audio&amp;utm_content=12279",
                    siteURL: "https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=12279"
                }
            ],
            audio: "../../audio/radio/let-it-go-12279.mp3",
            categories: ["Instrumental", "HipHop", "Jazz"],
            contentId: "Unknown",
        }
    ];


    let command;
    const sendCommand = (e: any) => {
        var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
        console.log(charCode)
        if (charCode == 32) {
            e.target.innertHTML = e.target.value
        }
        if (charCode == 13 || e.code == 'Enter') {
            e.preventDefault();
            executeCommand(e);
        }
        if (charCode == 38) {
            console.log(localStorage.getItem('localCommands'));
        }
        if (charCode == 40) {
            console.log(localStorage.getItem('localCommands'));
        }
    }

    const executeCommand = async (e: any) => {
        const inputTerminal: any = document.getElementById("terminal-input");
        const commands = document.getElementById('commands');

        localArray.push(e.target.value);
        if(localArray.length !== 0){
            localStorage.setItem('localCommands', JSON.stringify(localArray));
        }
        const commandsArr = e.target.value.replace(/\s\s+/g, ' ').split(" ");
        let response = "";
        if (commands) {
            command = document.createElement('div');
            command.setAttribute("class", "screen-terminal__container__line__response");
            commands?.appendChild(command);
            let commandClean = commandsArr.join(" ");
            if (commandsArr[0] === "cli") {
                if (commandsArr[1] === "--help") {
                    console.log("enter")
                    response = `
                <h5>Comandos básicos</h5>
                <div class="divider dashed"></div>
            <code class='code consola-font'>
                # <span class='main-command'>musicli</span> <pre>--help</pre>
            </code>`;
                } else if (commandsArr[1] === "play") {
                    if (commandsArr[2] === "") return;
                    const clonArr = [...commandsArr];
                    clonArr.shift();
                    clonArr.shift();
                    console.log("QUERY",);
                    await searchYoutubeMusicOrPlaylist(clonArr.join(" ")).then(data => {
                        console.log(data.title)
                        response = `
                    <small>Reproduciendo:</small>
                    <h4>${data.title}</h4>
                    `;
                    });

                } else if (commandsArr[1] === "fm") {
                    const audio: any = document.getElementById("radio-player") as HTMLAudioElement;
                    const bars: any = document.getElementById("bars") as HTMLDivElement;
                    if (commandsArr[2] === "start") {
                        bars.classList.remove("silence");
                        const randomAudio = Math.floor(Math.random() * audioArr.length);
                        const selectedAudio: any = audioArr.find((el, index) => index === randomAudio);
                        audio.src = selectedAudio.audio;
                        audio["data-last"] = randomAudio;
                        audio.play();

                        let playerDetails = document.getElementById("player-details") as HTMLDivElement;
                        playerDetails.innerHTML = terminalPlayer(selectedAudio);
                        setPageTitle(selectedAudio.title);
                        audio.addEventListener("ended", function () {
                            bars.classList.add("silence");
                            let lastId = audio["data-last"];
                            if (lastId === 2) {
                                lastId = 0;
                            } else {
                                lastId = lastId + 1;
                            }
                            const selectedAudio: any = audioArr.find((el, index) => index === lastId);
                            audio.src = selectedAudio.audio;
                            audio["data-last"] = lastId;
                            audio.play();
                            bars.classList.remove("silence");
                            playerDetails.innerHTML = terminalPlayer(selectedAudio);
                            setPageTitle(selectedAudio.title);
                        });
                    } else if (commandsArr[2] === "volume") {
                        if ((!isNaN(parseFloat(commandsArr[3])))) {
                            let volume = parseFloat(commandsArr[3]);
                            if (volume <= 1) {
                                audio.volume = parseFloat(commandsArr[3]);
                                response = `<small>Volumen actual: ${commandsArr[3]} en el rango de [0-1]</small>`;
                            } else response = `<small>Ingresa un volumen en el rango de [0-1]</small>`;
                        } else {
                            if (commandsArr[3] === "up") return audio.volume += 0.2;
                            if (commandsArr[3] === "down") return audio.volume -= 0.2;
                            response = `<small>Valor incorrecto. Ingresa un volumen en el rango de [0-1]</small>`;
                        }

                    }
                } else if ("album") {
                    response = `<div class="asci-img small">
                    ${textList.albumImg}
                </div>`
                }


            }
            if (commandClean === "clear" || commandClean === "cls") {
                commands.innerHTML = "";
            }
            command.innerHTML = responseTerminal(commandsArr, response);
            inputTerminal.scrollIntoView();
            inputTerminal.value = "";
        }
    }

    const searchYoutubeMusicOrPlaylist = async (query: string) => {
        const secretKey = process.env.NEXT_PUBLIC_YOUTUBE_KEY;
        let data = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${secretKey}&part=snippet,id&order=date&maxResults=6&type=video&videoEmbeddable=true&videoLicense=youtube&videoSyndicated=true&liveBroadcastContent=none&q=${query}`);
        console.log(data)
        let musicId = data.data.items.find((video: any) => {
            if (video.snippet.liveBroadcastContent !== "upcoming") {
                return video
            }
        });
        let musicData = musicId.snippet;
        musicId = musicId.id.videoId;
        let musicPlayer: any = document.getElementById("hidden-player");
        if (musicPlayer) {
            musicPlayer.innerHTML = musicId ? `
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${musicId}?autoplay=1&mute=0&loop=1" frameborder="0" allow="autoplay" encrypted-media allowfullscreen></iframe>
					`: "";
        }
        return musicData;
    }
    return (
        <div className="screen-terminal__container__line">
            <Head>
                <title>SimpleCLI {pageTitle ? `| ${pageTitle}` : ''}</title>
            </Head>
            <span className='command-start'>
                <div className="root">▲</div>
                <div className="path">~  cli</div>
                {/* <div className="type">♬ music</div> */}
            </span>
            <input className='input' id="terminal-input" inputMode="url" autoCorrect='off' autoComplete='off' onKeyDown={(e) => sendCommand(e)} spellCheck={false}></input>
        </div>
    )
}

export default TerminalInput