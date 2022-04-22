import Page from '@/components/page'

const Index = () => {
	// img to text 
	// https://github.com/victorqribeiro/imgToAscii
	// https://raw.githubusercontent.com/ahmadawais/Shades-of-Purple-Hyper/master/images/Shades-of-Purple-Hyper.gif
	let asciImg = `NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXKKK00OOOOOOOOOOOOO00KXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXK0OkkkkxdddxkkkkxxxxxxxxxxkO0KXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXK0kkkkkxkkkkxkOO0KKKKK000OO0Oxddxk0KXXNNNNNNNNNNNNNKkkkkkkkkkkkkx0NNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNXKOkxxkOOOO00000O000KKKKKKKKKK000OkdddxOKXNNNNNNNNNNNNk;,;;;,;;,,;;,dXNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNXKOkkxxxOO0OOOOOO0K00KXXXXXKKKKXK000Okxxdox0KXNNNNNNNNNN0ocllldoolllld0NNN
	NNNNNNNNNNNNNNNNNNNNNNNNNXKOxxkkxxxddxO000OO0KK00XXXXXKKKXXK000Okkxoodk0XXNNNNNNNNOlclclolllllld0NNN
	NNNNNNNNNNNNNNNNNNNNNNNNXKOxdxxdooxkkk0XNXKK00KKKKKKKKXKKXXKKKK0O0Oxdodx0KXNNNNNNNkclccc:;clccc:dXNN
	NNNNNNNNNNNNNNNNNNNNNNNNX0xdxxxxddxOK000KXXK00KKKKKKKXXXXXXKXXX00KOxxdddxOKXNNNNNNX0000000000000KNNN
	NNNNNNNNNNNNNNNNNNNNNNNXKOdddddddxkOKK000KKKKKKKKKKKXXXXXKKKXXK0KKOOkkxdok0XXNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNX0xxkxddddkO00000KKKKKXXXXKKKKKKKKKKKKKKKKK0OkkkxddOKXNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNXKOxxkkkkkxkOO000KKKKXXXXXXXXXXXXXXXKKKKK0KKK0kxxxddk0XNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNXKOxxkOOOkkkkO0KKKXXXXXXNXXXXXXXXXXXXKKKK0000Okkkkddk0XNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNXKOkxxxxxddxkO0KKXXNNNNNNNNNNNNNNNNNNXXKK000OOOO0Oxxk0XNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNXX0kxddxxddxkO0KKXXNNNNNNNNNNNNNNNNNNXXXK00OOOO00Okxk0XNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNX0kdolodoodxkOO0KXXNNNNWWWWWWWWWNNXXK0OOkkkxdxkkOkxOKXNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNWNNNNNXKOdoc:cccloooodxdookKNNWWWWWWWXOxl:ldxdoooollldxkxOKXNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNXKOxxl:lodxkkxxddlllok0XNWWWWNNOollllloxk0OkdollooxOKXNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNWWNNNNNKkddxxkO00Odl:;,,,;:cldkKNNNNKkdlc:::;'';:oO00OxooxOKXXNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNWNNNKkddxxkkxxxdl:;;::::;;;;;:o0XXKdc;,,;:::;;,'';codkOOOO0KXNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNWNX0xoodddxxxkOKKXKXXXKKK0kxxdloOKKOodxxk0KXXXXKK00OkxdkO0K0O0KNWNNNNWNNNWNNNWNNNNNN
	NNNNNNNNNNNNNNNNX0kxxkkOOKKXKKK0K0000Okxxddol::o0XX0o:lddoooddkOO000KXXXKXK0Okxk0KNNNNWNNNNNNWNNNNNN
	NNNNNNNNNNNNWNXOxxkOKXKK0OOkkOO000OOOkkxxdddolld0XNKxloxdddddxkOOOOO00KKXNNXK0OkxdxOKXNNNNNNWWWNNNNN
	NNNNNNNNNWNX0kxdxxk000OOkO0KKKKKKKKKKK00000OkddOXNWN0ddkOOOO0KXXNNXXXNNNNNXKKKK0OkxxdxxO0XNWWNNNNNNN
	NNNWWNNXK0kdddxxkkOKXXXXXXKOkxolllodxxxxxO0K0kkx0NWNOkO0K0kxxxxkkkxxk0KXNNNNNNXXKK0OOkxdddxkO0KNNWWW
	XXKK0OxddoddxxkkOO0KXXKK0OOkkkkO000KK0000KNXK00k0NNX0OKKNNXKK0KKKKKKKKKKXK0KXXNNXXKK000OOkxdooodxkOO
	dddooooodxkkOOO00KKKXXKKXXXXKK0OOkxkO0KKXXNXXXXKXXXXXXXXXNWNNXK0OkO00KXNNNXXXXNNNNXXXKKK00OOkxxxxxxx
	O0OOOkkkkO0000KXXXXXNNNNNNXXKxl:clodk0KXXXXX0xc:coolcld0XNNNNNXKOkxddx0XNNNNNNNNNNNNNNNXXXXXKKKXXXXN
	XXNXXXKKKXXXXXXXNNXXXXXNNWWNNKOxdxxkO0KXXX0d;,:c,',;cl;;o0XNNNXKKK0kOKXNNNNNNNXXXNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNXXXXXXKXXXNNWWWWWNNXX0kkO00KXXXO;.;xkl,':x0x,,dXNNXXXXK0KXNNNWWWWWWNNXXXXXXXXXXXNNNNNWWWW
	NNNNNXXXKKK00KKKXXNWWWWWWWWWWNNNX0kk00KXXXKd'.,;;;:;::,'l0XNNXXXK0KX0XWWWWWWWWWWWWWNNNNXXXXXXNNXXXXX
	XXXXXXXXXXXXXNNWWWNNNWWWNWWWWNNNNX0kO0KKXXXKkl:;,,,;:clkKXXNNXXK0KNNKXWWWWWNWWWWWWWWWWWWWWWWWWWNNNNN
	NNNWWWWWWWNNNNWWNNNNNNNNNNNNNNNNNNX0kk00KKXXXXK00OO00XNNXXNNNX0OKNNWNNWWNWWNNNNWNNWWWWWWWWWWWNWWWWWW
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXKOxkkO0KKXXNNNWWNNNNNNNXXKOO0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXKkxxkkOKXNNWWWWWWWWNNXK0OOOKXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXK0kkkOOO0KXNNNNNNXXXK000000KXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXK0kkOO0000KKXXXXXXKKKKKKK00KXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXKKOkO00KKKKXXNNNNNXXKKKKKK0O0KKXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
	NNNNNNNNNNNNNNNNNNNNNNNNNNNXXXXXXKKK0OkO0KXKXXXNNNNNNNXXXXXXKOO000KKXXXXXXNNNNNNNNNNNNNNNNNNNNNNNNNX
	XXXXXXXXXXXXXXXXNNNNXNNXXXXXXXKKKK00OkOO0XXXNNNNNNNNNNNNNNXK0OO00O00KKKXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
	KKKKKKKKKKKKXXXXXXXXXXXXXKKKKKK00OOOkOOO0XNNNNWWWNNNNNNNNNXK0O00OOOO000KKKKKKXXXXXXXKKKKKKKKKKKKKKKK
	0000000000000KKKKKKKKKKKKK0000OOOkkkOOOO0KNNNNWWWWWWNNNNNNX00000OOkkkOO0000000KKKKK00000000000OOOOOO
	kkkkOOOOOOOOOOOOO000000OOOOOOkkkkkkOO0OO0KXNNNNWWWWWWWWNNNX000000OOkkkkkkOOOOOOOOOOOOOOOOOkkkkkkkkkk
	OOOOOOOOkkkkkkkkkkkkkkkkkkkkkkkkkOO000000KKXNNNNWWWWWWNNNXKKKK0000OOOkkkxxkkkkkkkkkkxxxkkkkkOOO00000
	KKKKKK0000OOkkkxxkkkkkkxxkkkkkkkOO00000KKKKXNNXNWWWWWNNNXXKKKKKKK00OOOkkkkkkkkkkkxxkkkOOO00KKKKXXXXX
	XXXXXXXXKKKK00OOkkkkkkkkxxxxxkkkkOOOO00KKK0KXNXXNWWWNNXNXXKKKKKKK00OOkkkkkkkkkOOOOO000KKXXXXXXNNNNNN
	XXXXXXXXXXXXKKKK00OOkkkxxxxxxkxxkkkkkkOO0K0KXNNXNNWNNXXNXKKKK0000OOOOOOOOOOOO0000KKKXXXNNNNNNNNNNNNN
	XXXXXXXXXXXXXXXKKK000OOOOOOOOOOOOOOOOOOO00KKXNNXXNNNXXXXXXKKK0000000000KKKKKKKKKXXXXXNNNNNNNNNNNNNNN
	KKKKKXXXXXXXXXXXXXXKKKK0000000000000000KKKKXXXNXXXNXXXXXXXXKKKKKKKKKKKKXXXXXXXXXXXNNNNNNNNNNNXXXXNNN
	K000KKXXXXXXXXXXXXXXXXXKKKKKK00000000KKKKXXXXXXXXXXXXXXXXXXKKKKKKKKKKXXXXXXXXXXXXNNNNNNNNNNXXXKKKKKX
	000000KXXXXXXXXXXXXXXXXXXKKKK00000000KKKXXXXXXXXXXXXXXXXXXKKK00000KKKKXXXXXXXXXXXNNNNNNNNXXXKKKKKKKK`
	let command;
	const sendCommand = (e: any) => {
		var commands = document.getElementById('commands');
		var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
		console.log(charCode)
		if (charCode == 32) {
			console.log(e.target.innerText)
			e.target.innertHTML = e.target.innerText
		}
		if (charCode == 13) {
			e.preventDefault();
			const commandsArr = e.target.innerText.replace(/\s\s+/g, ' ').split(" ");

			command = document.createElement('div');
			command.setAttribute("class", "screen-terminal__container__line__response");
			command.innerHTML = `
			<div class="screen-terminal__container__line">
				<span class='command-start'>
					<div class="root">▲</div>
					<div class="path">~ lidify</div>
					<div class="type">♬ Music</div>
				</span>
				<div  class='input' spellcheck="false">${commandsArr.map((comm: string) => (
				`<span class="${comm}">${comm}</span>`
			)).join(" ")
				}</div>
			</div>
			<div class='response' spellcheck="false">
			</div>
			`;
			commands?.appendChild(command);
			command.scrollIntoView();
			e.target.innerText = "";
		}
	}

	return (
		<Page title="Una terminal con música para desarrolladores 📻">
			<section className='screen-terminal'>
				<div className="screen-terminal__header">
					<div className="action-btn close"></div>
					<div className="action-btn minify"></div>
					<div className="action-btn expand"></div>
				</div>
				<label htmlFor='terminal-input' className="screen-terminal__container">
					<div className="welcome__message">
						<p>
							Bienvenid@ a
						</p>
						<br />
						<div className='welcome'>
							██╗░░░░░██╗██████╗░██╗███████╗██╗░░░██╗
							██║░░░░░██║██╔══██╗██║██╔════╝╚██╗░██╔╝
							██║░░░░░██║██║░░██║██║█████╗░░░╚████╔╝░
							██║░░░░░██║██║░░██║██║██╔══╝░░░░╚██╔╝░░
							███████╗██║██████╔╝██║██║░░░░░░░░██║░░░
							╚══════╝╚═╝╚═════╝░╚═╝╚═╝░░░░░░░░╚═╝░░░
						</div>
						<br />
						<p>
							En este sitio puedes escuchar musica mientras trabajas, estudias o simplemente te relajas. Explora la gran variedad de generos que tenemos.
						</p>
						<br />
						<p>
							Para que puedas disfrutar del contenido conoce como puedes interactuar con esta linea de comando como los siguientes comandos básicos:
						</p>
						<br />
						<code className='code'>
							<span className='main-command'>lidify</span> <pre>--help</pre>
						</code>
						<div className="welcome small">
							{asciImg}
						</div>
					</div>
					<div id="commands" className="commands"></div>
					<div className="screen-terminal__container__line">
						<span className='command-start'>
							<div className="root">▲</div>
							<div className="path">~ lidify</div>
							<div className="type">♬ Music</div>
						</span>
						<div contentEditable={true} className='input' id="terminal-input" onKeyDown={(e) => sendCommand(e)} spellCheck={false}></div>
					</div>
				</label>
				<div className="screen-terminal__footer">
					footer content
				</div>
			</section>
		</Page>
	)
}

export default Index
