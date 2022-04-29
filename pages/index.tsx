import TerminalPage from '@/components/TerminalPage'
import { textList } from '@/components/text-list/textList'
import WelcomeMessage from '@/components/welcome-message/WelcomeMessage'
'@/components/text-list/textList'

const Index = () => {
	// https://drive.google.com/uc?id=1iR01Uj_qaK_tSJb6sJyxj2G940Iy__5x
	// https://doc-10-a0-docs.googleusercontent.com/docs/securesc/splrlcpkfs0ngnpcpiachvou3vk6msg7/va279fsb1r66pnv5sjfqlsivin3f4ob5/1651115625000/05603500454043015457/11233183303207878756/1iR01Uj_qaK_tSJb6sJyxj2G940Iy__5x?ax=ACxEAsYvhlRMqC7cnmt7Fy0dUarR5EXK_gBR3OS-oGWaeJ_YaNy7v_c_WhcalGyt22gAapmid5AqHdjaAGqVoyLzjUZ_7Rb0vltyKW2cT6HrgWBEX4yoPOpJpYRjomdAwbIvXLnfLNR3rvgCUyPP3ifBKOwiJTUklGtyPMCoyzkZtHkUxEVetwKNW-TQ2a4XMnDEPH_v9dViWuiBC5Si28KYs2lg29OS5kFx_qjqOvlePyKShYHEBXOQqn6Dp75w4Pt913zHMxZZTOrjxg9sXgYOvJRbXiuUDG-IIfXs7LOnudSNjsht-wMurPZZC4H5BO0hBonPKIAnntA8YRBhmoB7mFi2YdSkZqORHyVx-Wd5B0K2g8JBXwxVjEiu06khvPcDBPBFGk-EoNitqIoMhbfXdfHZRoAQW1ZOAztLku6ymhR0wKxXRivOtIu7xOTTWKqof7Hv6fcVWTdScaON45Q5JgYQArvpBbTXYFxyfLlVEhtZZm8C4GvWVPqiyxIDuNIKIPLjIupbrJ-cThu-QKDN2wvSwYPYxO65vD8D87pG1dwGu3Pga4qrk8VvmzOn5DTNBTTkgynyMepM30XgA8mMBQsAGR2rBBV5ijfK7l_-q0pbeQGbM-CKX2heRorUXoN4a0y1cNBBuTku7MXXBdHcgo9cDS5t7zs60pTDkJ2vvXTFhPV36h9z7o5XthxppG6X34Myfs-N8oEvaKe0ky7ECAuta-0Hd1PqezZ5bw_wJYXqxpTXc9VbfOku3BLlVns5gqJ1t_nj79rXUrDwxfP4IA&authuser=0
	// https://github.com/victorqribeiro/imgToAscii - https://raw.githubusercontent.com/ahmadawais/Shades-of-Purple-Hyper/master/images/Shades-of-Purple-Hyper.gif
	return (
		<TerminalPage title="Una terminal con música para desarrolladores 📻">
			<WelcomeMessage
			asciTitle={textList.mainASCIWelcome}
			mainParagraph='Bienvenid@ a MusiCLI! En este sitio puedes escuchar música mientras trabajas, estudias o simplemente te relajas. Explora la gran variedad de generos que tenemos para ti.'
			/>
		</TerminalPage>
	)
}

export default Index
