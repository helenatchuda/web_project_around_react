import card from "../../images/image2_card.png";
import lixeira from "../../images/Trash_lixeira.png";
import heart from "../../images/heart.png";

export default function Cards(props) {
  return (
    <>
      <li className="card">
        <div className="card__image-container">
          <img src={card} alt="Imagem do cartão" className="card__image" />
          <button className="card__delete-button" aria-label="Apagar cartão">
            <img
              src={lixeira}
              alt="Lixeira apagar"
              className="card__trash-icon"
            />
          </button>
        </div>
        <div className="card__footer">
          <h2 className="card__title"></h2>
          <img src={heart} alt="Curtir cartão" className="card__heart" />
        </div>
      </li>
    </>
  );
}
