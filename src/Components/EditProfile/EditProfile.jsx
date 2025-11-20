export default function EditProfile() {
  return (
    <>
      <form className="popup__form form popup__form-edit-name" noValidate>
        <label htmlFor="name">
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
    </>
  );
}
