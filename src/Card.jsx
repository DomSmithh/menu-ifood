import "./Card.css";

function Card( {foto, nome} ){
    return(
        <div className="paginas">
            <div className="foto-pag">
                <img className="foto" src={foto} alt={nome} />
            </div>

            <div className="nome-pag">
                <p>{nome}</p>	
            </div>
        </div>
    );
}

export default Card;