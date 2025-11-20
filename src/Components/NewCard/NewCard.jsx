export default function NewCard() {
  return (
    <form className="form" name="card-form" id="new-card-form" noValidate>
      <label className="form__field">
        <input
          className="form__input form__input_type_card-name"
          id="card-name"
          maxLength="30"
          minLength="1"
          name="card-name"
          placeholder="Title"
          required
          type="text"
        />
        <span className="form__error" id="card-name-error"></span>
      </label>
      <label className="form__field">
        <input
          className="form__input form__input_type_url"
          id="card-link"
          name="link"
          placeholder="Image link"
          required
          type="url"
        />
        <span className="form__error" id="card-link-error"></span>
      </label>

      <button className=" popup__save-button popup__save-button_disabled">
        Salvar
      </button>
    </form>
  );
}
