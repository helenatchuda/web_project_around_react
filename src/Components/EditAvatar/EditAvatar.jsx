export default function EditAvatar() {
  return (
    <>
     <form className="form" name="photo-form" id="new-photo-form" noValidate>
      <label className="form__field">
        <input
          className="form__input form__input_type_photo-name"
          id="Photo-name"
          maxLength="30"
          minLength="1"
          name="Photo-name"
          placeholder="imgagelink"
          required
          type="url"
        />
        <span className="form__error" id="photo-name-error"></span>
      </label>
     

      <button className=" popup__save-button popup__save-button_disabled">
        Salvar
      </button>
    </form>
    </>
  );
}
