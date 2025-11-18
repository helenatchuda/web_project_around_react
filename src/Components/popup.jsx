export default function Popup(props) {
 
 

  return (
    <>
   
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`} id="edit-popup" data-type="edit">
      <div className="popup__container">
        <img
          src="./images/Close Icon.png"
          alt="Fechar popup"
          className="popup__close"
        />

        <h2 className="popup__title">Editar Perfil</h2>
        <form className="popup__form form popup__form-edit-name" novalidate>
          <label for="name">
            <input
              type="text"
              id="name"
              className="form__input  form__input-userName"
              placeholder="Nome"
              required
              minlength="2"
              maxlength="40"
            />
            <span
              className="form__error"
              id="name-error"
              aria-live="polite"
            ></span>
          </label>
          <label for="description">
            <input
              type="text"
              id="description"
              className="form__input  form__input-about"
              placeholder="Descrição  "
              required
              minlength="2"
              maxlength="200"
            />
            <span
              className="form__error"
              id="description-error"
              aria-live="polite"
            ></span>
          </label>
          <button
            type="submit"
            className="popup__save-button popup__save-button_disabled"
            disabled
          >
            Salvar
          </button>
          <div
            className="form__error-summary"
            role="alert"
            aria-live="polite"
          ></div>
        </form>
      </div>
    </div>
    </>
    
    

  );
}