import "./Menu.css"

function Menu( {foto, nome, des, qtd, preco} ){
    return(
        <div className="site">
            <div className="rounded-foto">
                <img className="foto-perfil" src={foto} alt={nome} />
            </div>

            <div className="info-card">
                <p className="nome">{nome}</p>
                <p className="des">{des}</p>
                <p className="qtd">{qtd}</p>
                <p className="preco">{preco}</p>	
            </div>
        </div>
    );
}


export default Menu;