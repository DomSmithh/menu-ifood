import Card from "./Card";
import "./App.css"

function App(){
	const paginas = [
		{
			foto: "https://i.pinimg.com/originals/92/77/1d/92771df7a0383a3a2e3c3a53f329a420.png",
			nome: "Twitch",
		},
		{
			foto: "https://www.apaulista.org.br/wp-content/uploads/2021/02/youtube-logo.png",
			nome: "Youtube",
		},
		{
			foto: "https://e7.pngegg.com/pngimages/1024/458/png-clipart-google-translate-translation-google-blue-angle-thumbnail.png",
			nome: "Tradutor",
		},
		{
			foto: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
			nome: "Github",
		},
		{
			foto: "https://logospng.org/download/microsoft-outlook/logo-microsoft-outlook-1024.png",
			nome: "Outlook",
		},
		{
			foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png",
			nome: "Facebook",
		},
		{
			foto: "https://foroalfa.org/imagenes/ilustraciones/g-1.jpg",
			nome: "Google",
		},
		{
			foto: "https://logodownload.org/wp-content/uploads/2021/06/google-meet-logo-6.png",
			nome: "Meet",
		},
		{
			foto: "https://www.ifmg.edu.br/portal/dti/imagens/Asset12.png/@@images/f9358492-cfd6-4ad0-9d88-f344875a471d.png",
			nome: "Suap",
		},
		{
			foto: "https://img.ibxk.com.br/2019/07/26/26171514413327.jpg",
			nome: "League of Legends",
		},
	];

	return(
		<div className="conteiner">
			{
				paginas.map((pag) => {
					return <Card 
							foto={pag.foto}
							nome={pag.nome}
						/>;
				})
			}
		</div>
	);
}

export default App;