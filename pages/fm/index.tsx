import TerminalPage from '@/components/TerminalPage'
import WelcomeMessage from '@/components/welcome-message/WelcomeMessage'

const Index = () => {
    return (
        <TerminalPage >
            <WelcomeMessage
                asciTitle='
                    ███████████████████████████████████
                    █─▄▄▄─█▄─▄███▄─▄█████▄─▄▄─█▄─▀█▀─▄█
                    █─███▀██─██▀██─███████─▄████─█▄█─██
                    ▀▄▄▄▄▄▀▄▄▄▄▄▀▄▄▄▀▀▀▀▀▄▄▄▀▀▀▄▄▄▀▄▄▄▀'
                mainParagraph='Bienvenid@ a CLI FM! En este sitio puedes escuchar música mientras trabajas, estudias o simplemente te relajas. Disfruta de nuestra radio que funciona 24/7.'
            />
            <div id='player-details' className='radio__player'></div>
            <audio id="radio-player"className='hidden' controls>
                <source src="" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </TerminalPage>
    )
}

export default Index