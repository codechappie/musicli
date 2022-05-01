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
            
        </TerminalPage>
    )
}

export default Index