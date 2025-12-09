import avatar from "../images/Avatar.png";
import caneta from "../images/caneta.png";
import addIcon from "../images/Add.png";

export default function Profile(props) {
  return (
    <section className="profile">
      <div className="profile__container">
        <img
          src={avatar}
          onClick={props.onPhotoClick}
          alt="Foto de perfil"
          className="profile__avatar"
        />
        <div className="profile__info">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <h2 className="profile__description">Explorador</h2>
          <button
            className="profile__edit-button"
            onClick={props.onEditProfile}
            aria-label="Editar perfil"
          >
            <img src={caneta} alt="Ícone editar perfil" className="" />
          </button>
        </div>

        <button
          onClick={props.onAddCard}
          className="profile__add-button"
          aria-label="Adicionar cartão"
        >
          <img src={addIcon} alt="Ícone mais" className="" />
        </button>
      </div>
    </section>
  );
}
