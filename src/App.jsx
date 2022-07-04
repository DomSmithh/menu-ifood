import Card from "./Card";
import "./App.css"

function App(){
	const paginas = [
		{
			foto: "logo.svg"
		},
		{
			nome: "Entregador",
		},
		{
			nome: "Restaurante e Mercado",
		},
		{
			nome: "Carreiras",
		},
		{
			nome: "iFood Card",
		},
		{
			nome1: "Criar conta",
		},
		{
			nome2: "Entrar"
		}
	];

	return(
		<div className="conteiner">
			
			{
				paginas.map((pag) => {
					return <Card 
							nome={pag.nome}
							foto={pag.foto}
							nome1={pag.nome1}
							nome2={pag.nome2}
						/>;
				})
			}
		</div>
	);
}

export default App;