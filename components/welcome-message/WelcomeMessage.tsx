import { setCommand } from '@/helpers/ExecuteCommands';
import React from 'react'

interface Props {
    asciTitle: string;
    mainParagraph: string;
}
const WelcomeMessage = ({ asciTitle, mainParagraph }: Props) => {
    return (
        <div className="welcome__message">
            <div className="start__message">
                {asciTitle}
            </div>
            <div className="divider dashed"></div>
            <p className='consola-font'>
                {mainParagraph}
            </p>
            <div className="divider dashed"></div>
            <p className='consola-font'>
                Para empezar a reproducir un genero o artista, escribe el siguiente comando en la consola <code className="command-line clickable" onClick={() => setCommand("play-rock")}>musicli play rock</code> o  <code className="command-line clickable" onClick={() => setCommand("play-bob-marley")}>musicli play bob marley</code> y luego presiona enter y se reproducirá una playlist de música de ese genero o artista.
                Si deseas ver todos los comandos disponibles, escribe <code className="command-line clickable" onClick={() => setCommand("help")}>musicli --help</code>
            </p>
            <div className="divider small"></div>
            <p className="consola-font">
                ¡MusiCLI.com (* v0.0.1, codename: beta) desplegada & lista para usar!
            </p>
            {/* <code className='code consola-font'>
							# <span className='main-command'>musicli</span> <pre>--help</pre>
						</code> */}
        </div>
    )
}

export default WelcomeMessage